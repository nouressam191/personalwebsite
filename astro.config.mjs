import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.nouressam.com',
  // Keep links from the old Google Sites version working.
  redirects: {
    '/home': '/',
    '/flextock': '/portfolio',
    '/vimail-io': '/portfolio',
    '/blog': '/',
  },
});
