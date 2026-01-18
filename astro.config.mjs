// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lauraziegler.de', // TODO: Echte Domain einsetzen
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  compressHTML: true,
});