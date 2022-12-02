import { props2table } from 'vitepress-plugin-props2table'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [
    props2table(),
  ],
})
