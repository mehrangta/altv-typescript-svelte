import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: './',
  build: {
      outDir: '../resources/webviews',
      emptyOutDir: true,
      minify: 'esbuild',
      reportCompressedSize: false,
  },
})
