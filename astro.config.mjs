// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in the deployment environment once the domain is confirmed.
const site = process.env.SITE_URL || 'https://ajiese.site';

export default defineConfig({
  site,
  trailingSlash: 'never',
  // 'class' lets a page's scoped styles reach the components it passes a class to.
  scopedStyleStrategy: 'class',
  build: { format: 'file' },
  integrations: [sitemap()],
  image: {
    // Artwork is never cropped or recoloured by the pipeline, only resized and re-encoded.
    responsiveStyles: false,
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
