import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/component'),
      '@assets': path.resolve(__dirname, './public/assets'),
      '@store': path.resolve(__dirname, './src/store'),
      '@css': path.resolve(__dirname, './src/css'),
    },
  },
})
