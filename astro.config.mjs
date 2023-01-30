import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  root: '.',
  site: 'https://www.jesusmolano.dev/',
  base: '/',
  server: {
    host: 'localhost',
    port: 3000
  },
  integrations: []
})
