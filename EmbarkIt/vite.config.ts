imprt { defineConfig } from 'vite'
import react fom 'vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/EmbarkIt/",
  plugins: [react()],
})
