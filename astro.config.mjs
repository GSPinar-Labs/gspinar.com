// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gspinar-labs.github.io',
  base: '/gspinar.com',
  image: {
    responsiveStyles: true,
  },
});
