// @ts-check
import { defineConfig } from 'astro/config';

const isGithub = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGithub
    ? 'https://spazio-genesi.github.io'
    : 'https://spaziogenesi.org',

  base: isGithub
    ? '/spazio_genesi_astro/'
    : '/',

  trailingSlash: "always",
  
  
  // IMPORTANTE: Configurazione per gestire i path assoluti
  build: {
    assets: '_astro',
    format: 'directory',
  }
});