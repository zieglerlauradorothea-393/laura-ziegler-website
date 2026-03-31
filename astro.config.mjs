// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://laura-ziegler.com',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({
    filter: (page) =>
      !page.includes('/impressum') &&
      !page.includes('/datenschutz') &&
      !page.includes('/cookies') &&
      !page.includes('/404'),
  })],
  compressHTML: true,
});