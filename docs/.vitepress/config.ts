import { defineConfig } from 'vitepress'

import { props2table } from 'vitepress-plugin-props2table'

export default defineConfig({
  title: 'Practical Utils',
  description: 'Practical business tools methodology package.',

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
