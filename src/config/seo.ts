import { coreTechnologies, personalInfo, professionalLinks } from '../data/portfolioData';

export const seoConfig = {
  siteUrlEnvironmentVariable: 'VITE_SITE_URL',
  localSiteUrl: 'http://localhost:3000',
  title: `${personalInfo.name} | ${personalInfo.role}`,
  description: `Portfólio de ${personalInfo.name}, ${personalInfo.role} com experiência profissional desde 2019 em aplicações web, mobile e desktop.`,
  author: personalInfo.name,
  locale: 'pt_BR',
  language: 'pt-BR',
  socialImage: {
    path: '/images/portfolio-social.png',
    width: 1200,
    height: 630,
    alt: `Portfólio profissional de ${personalInfo.name}, ${personalInfo.role}`,
  },
  robots: {
    production:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    unconfigured: 'noindex, nofollow',
  },
  person: {
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    email: professionalLinks.email.url,
    sameAs: [professionalLinks.linkedin.url, professionalLinks.github.url],
    address: {
      locality: 'São José do Rio Preto',
      region: 'São Paulo',
      country: 'BR',
    },
    knowsAbout: [...coreTechnologies],
  },
} as const;

export const normalizeSiteUrl = (value: string) => value.trim().replace(/\/+$/, '');

export const createStructuredData = (siteUrl: string) => {
  const pageUrl = `${siteUrl}/`;
  const personId = `${pageUrl}#person`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: seoConfig.person.name,
        jobTitle: seoConfig.person.jobTitle,
        email: seoConfig.person.email,
        url: pageUrl,
        sameAs: seoConfig.person.sameAs,
        knowsAbout: seoConfig.person.knowsAbout,
        address: {
          '@type': 'PostalAddress',
          addressLocality: seoConfig.person.address.locality,
          addressRegion: seoConfig.person.address.region,
          addressCountry: seoConfig.person.address.country,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#profile-page`,
        url: pageUrl,
        name: seoConfig.title,
        description: seoConfig.description,
        inLanguage: seoConfig.language,
        mainEntity: {
          '@id': personId,
        },
      },
    ],
  };
};
