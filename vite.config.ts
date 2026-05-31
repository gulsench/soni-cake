import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Vendored Framer code components import the `framer` runtime; shim it so
      // they run in a plain Vite + React app. (`framer-motion` is installed.)
      framer: fileURLToPath(new URL('./src/vendor/framer.ts', import.meta.url)),
    },
  },
})
