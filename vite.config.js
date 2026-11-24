import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/ and tailwind
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: '/~konsthaa/React/context/', //<-- users.metropoliassa oleva kansio
})

// tailwind
