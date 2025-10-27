import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/blank",
  plugins: [react()],
  server: {
    open: true,  // Automatically opens http://localhost:5173 in the browser
  },
  preview: {
    open: true,  // Keep this for preview if you have it
  },
})
