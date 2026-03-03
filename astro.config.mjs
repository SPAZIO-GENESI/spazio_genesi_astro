// @ts-check
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({ 
    site: isProd
    ? 'https://spaziogenesi.org'
    : 'https://spazio-genesi.github.io',
    base: isProd ? '/' : '/spazio_genesi_astro/',
});