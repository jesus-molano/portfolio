import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  root: '.',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  site: 'https://www.jesusmolano.dev/',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  server: {
    host: 'localhost',
    port: 3000
  },
  integrations: []
})
