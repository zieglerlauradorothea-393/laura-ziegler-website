// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://laura-ziegler.com',
  trailingSlash: 'never',
  // Frühere Unterseiten führen auf die passenden Abschnitte des One-Pagers.
  redirects: {
    '/leistungen': '/#leistungen',
    '/projekte': '/#erfahrung',
    '/und-sonst-so': '/#erfahrung',
    '/kontakt': '/#kontakt',
    '/cookies': '/datenschutz',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/impressum') &&
        !page.includes('/datenschutz') &&
        !page.includes('/404'),
    }),
  ],
  compressHTML: true,
});
