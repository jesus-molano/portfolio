import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

export default defineConfig({
  root: '.',
  output: 'server',
  site: 'https://www.jesusmolano.dev/',
  base: '/',
  server: {
    host: 'localhost',
    port: 3000
  },
  integrations: [sitemap(), compress()]
});