import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindConfig from '../05passwordgenerator/tailwind.config'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
