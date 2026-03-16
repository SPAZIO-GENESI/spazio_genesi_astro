// @ts-check
import { defineConfig } from 'astro/config';

const isGithub = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGithub
    ? 'https://spazio-genesi.github.io/spazio_genesi_astro'
    : 'https://spaziogenesi.org',

  base: isGithub
    ? '/spazio_genesi_astro/' // necessario per GitHub Pages
    : '/',

  trailingSlash: "always",

  build: {
    format: 'directory',   // compatibile con GitHub Pages
    // publicDir: 'public', // opzionale, default già 'public'
  },

  // Config per import path assoluti
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});