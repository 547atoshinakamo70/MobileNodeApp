import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',    // <= clave: rutas relativas
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
