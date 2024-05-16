// .vitepress/config.ts
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Counter-Strike Docs",
  description: "",
  themeConfig: { // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    // rewrites: {
    //   '/src/counter-strike/regional_standings/standings_global.md': '/regional_standings/standings_global.md',
    //   '/src/counter-strike/regional_standings/standings_europe.md': '/regional_standings/standings_europe.md',
    //   '/src/counter-strike/regional_standings/standings_americas.md': '/regional_standings/standings_americas.md',
    //   '/src/counter-strike/regional_standings/standings_asia.md': '/regional_standings/standings_asia.md',
    // },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Standings', link: '/src/counter-strike/regional_standings/standings_global' },
      { text: 'Major Supplemental Rulebook', link: '/src/counter-strike/major-supplemental-rulebook' },
      { text: 'Tournament Item Submission', link: '/src/counter-strike/tournament-item-submission-guidelines' },
    ],
    sidebar: [
      {
        text: '',
        items: [
          { text: 'Global Standings', link: '/src/counter-strike/regional_standings/standings_global' },
        ]
      },
      {
        text: 'Regional Standings',
        items: [
          { text: 'Europe Standings', link: '/src/counter-strike/regional_standings/standings_europe' },
          { text: 'Americas Standings', link: '/src/counter-strike/regional_standings/standings_americas' },
          { text: 'Asia Standings', link: '/src/counter-strike/regional_standings/standings_asia' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/snglenote/cs2-regional-standings' }
    ],
    footer: {
      message: 'Released under the MIT License.',
    }
  }
});
