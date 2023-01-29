import { defineConfig } from 'astro/config'
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  root: '.',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  site: 'https://portfolio-seven-sable-76.vercel.app/',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  server: {
    host: 'localhost',
    port: 3000
  },
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ]
})
