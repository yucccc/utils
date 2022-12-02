import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Practical Utils',
  description: 'Practical business tools methodology package.',
  base: '/utils/',
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Request',
        items: [
          { text: 'axios', link: '/request/axios' },
        ]
      }
    ]
  }
})
