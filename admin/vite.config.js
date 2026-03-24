import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/admin/dist/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    fs: {
      // Allow serving files from the project root (one level above admin/)
      allow: ['..']
    }
  }
})
