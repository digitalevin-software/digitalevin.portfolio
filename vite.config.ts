import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Sitenin yayınlandığı alt dizin. GitHub Actions bunu otomatik verir
  // (örn. "/digitalevin.portfolio/"); özel alan adında ve yerelde "/" olur.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
