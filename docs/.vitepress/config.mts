import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TouchDesigner Workshop",
  description: "A workshop for learning TouchDesigner",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Audio Processing', link: '/guide/audio-processing' },
          { text: 'Geometrie naar TOP', link: '/guide/geometry-to-texture' },
          { text: 'Partikels maken', link: '/guide/create-particles' },
          { text: 'Punten transformeren met geluid', link: '/guide/move-points-with-sound' },
          { text: 'Render Setup', link: '/guide/render-setup' },
          { text: 'Post Processing', link: '/guide/post-processing' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
