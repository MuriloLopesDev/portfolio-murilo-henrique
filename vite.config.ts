import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import { createStructuredData, normalizeSiteUrl, seoConfig } from './src/config/seo';

const escapeHtmlAttribute = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const createSeoPlugin = (siteUrl: string, isPublicUrlConfigured: boolean): Plugin => {
  const pageUrl = `${siteUrl}/`;
  const imageUrl = new URL(seoConfig.socialImage.path, pageUrl).toString();
  const robotsMeta = isPublicUrlConfigured
    ? seoConfig.robots.production
    : seoConfig.robots.unconfigured;
  const structuredData = JSON.stringify(createStructuredData(siteUrl)).replaceAll('<', '\\u003c');

  const replacements: Record<string, string> = {
    __SEO_TITLE__: escapeHtmlAttribute(seoConfig.title),
    __SEO_DESCRIPTION__: escapeHtmlAttribute(seoConfig.description),
    __SEO_AUTHOR__: escapeHtmlAttribute(seoConfig.author),
    __SEO_ROBOTS__: escapeHtmlAttribute(robotsMeta),
    __SEO_PAGE_URL__: escapeHtmlAttribute(pageUrl),
    __SEO_IMAGE_URL__: escapeHtmlAttribute(imageUrl),
    __SEO_IMAGE_WIDTH__: String(seoConfig.socialImage.width),
    __SEO_IMAGE_HEIGHT__: String(seoConfig.socialImage.height),
    __SEO_IMAGE_ALT__: escapeHtmlAttribute(seoConfig.socialImage.alt),
    __SEO_LOCALE__: seoConfig.locale,
    __SEO_JSON_LD__: structuredData,
  };

  return {
    name: 'portfolio-seo',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return Object.entries(replacements).reduce(
          (result, [token, value]) => result.replaceAll(token, value),
          html,
        );
      },
    },
    generateBundle() {
      const robots = isPublicUrlConfigured
        ? `User-agent: *\nAllow: /\n\nSitemap: ${pageUrl}sitemap.xml\n`
        : 'User-agent: *\nDisallow: /\n';
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '  <url>',
        `    <loc>${pageUrl}</loc>`,
        '  </url>',
        '</urlset>',
        '',
      ].join('\n');

      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
    },
  };
};

export default defineConfig(({ mode }) => {
  const environment = loadEnv(mode, '.', '');
  const vercelSiteUrl = environment.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${environment.VERCEL_PROJECT_PRODUCTION_URL}`
    : '';
  const configuredSiteUrl = environment[seoConfig.siteUrlEnvironmentVariable] || vercelSiteUrl;
  const isPublicUrlConfigured = Boolean(configuredSiteUrl);
  const siteUrl = normalizeSiteUrl(configuredSiteUrl || seoConfig.localSiteUrl);

  if (mode === 'production' && !isPublicUrlConfigured) {
    console.warn(
      `[SEO] ${seoConfig.siteUrlEnvironmentVariable} não está configurada. O build permanecerá com noindex e URLs locais.`,
    );
  }

  return {
    plugins: [react(), tailwindcss(), createSeoPlugin(siteUrl, isPublicUrlConfigured)],
  };
});
