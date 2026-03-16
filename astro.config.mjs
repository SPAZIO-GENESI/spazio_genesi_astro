// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://spazio-genesi.github.io/spazio_genesi_astro',

  // necessario perché il sito è pubblicato nella sottocartella del repo
  base: '/spazio_genesi_astro/',

  trailingSlash: "always",

  build: {
    format: 'directory',
  },

  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});