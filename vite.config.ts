import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@stream-io/video-react-sdk": "node_modules/@stream-io/video-react-sdk"
    }
  }
})
