import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/a
export default defineConfig({
    base: '/react/', // <- esto es MUY importante
  plugins: [react(), tailwindcss()],
})
