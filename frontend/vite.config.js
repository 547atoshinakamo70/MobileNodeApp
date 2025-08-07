import { defineConfig } from 'vite'
export default defineConfig({
  base: './',    // <= clave: rutas relativas
  build: {
    outDir: '../docs',
    emptyOutDir: true
  }
})
