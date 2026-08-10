# Portfólio — Murilo Lopes

Portfólio profissional desenvolvido como uma aplicação React de página única.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Requisitos

- Node.js
- npm

## Desenvolvimento local

```bash
npm install
npm run dev
```

O servidor de desenvolvimento é iniciado em `http://localhost:3000`.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera o build de produção em `dist`.
- `npm run preview`: executa uma prévia local do build.
- `npm run lint`: valida os tipos TypeScript sem gerar arquivos.
- `npm run clean`: remove os artefatos locais de build.

## Estrutura principal

- `src/components`: seções e componentes da interface.
- `src/config`: configurações compartilhadas da aplicação.
- `src/data`: conteúdo profissional exibido no portfólio.
- `src/types`: tipos TypeScript compartilhados.

## Publicação na Vercel

- Framework preset: `Vite`.
- Build command: `npm run build`.
- Output directory: `dist`.
- Root directory: raiz deste repositório.
- Variável recomendada em Production: `VITE_SITE_URL`, contendo a URL pública canônica com `https://` e sem barra final.

Quando `VITE_SITE_URL` não está configurada, o build na Vercel usa automaticamente
`VERCEL_PROJECT_PRODUCTION_URL`. Para domínio próprio, configure `VITE_SITE_URL` no
ambiente Production para manter canonical, Open Graph, sitemap e JSON-LD apontando
para o endereço desejado. Preview e Development permanecem com `noindex`, mesmo
quando conhecem a URL canônica de produção.

Mantenha habilitada no painel a exposição automática das variáveis de sistema da
Vercel. O build usa `VERCEL_ENV` para liberar indexação apenas em Production e
`VERCEL_PROJECT_PRODUCTION_URL` como fallback da URL canônica.

O projeto é uma landing page de rota única e não requer rewrite de SPA. Os headers de
segurança e cache estão definidos em `vercel.json`. Nenhum segredo, token ou chave é
necessário para executar ou publicar o site pela integração Git da Vercel.
