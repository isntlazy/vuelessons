// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // extends: '@nuxt-themes/typography',
  // ssr: false,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config'
    // exposeConfig: false,
    // config: {},
    // injectPosition: 0,
    // viewer: true,
  },
  imports: {
    dirs: ['stores']
  },
  css: ['@/assets/css/main.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'uk'
      },
      titleTemplate: '%s - Ранкова Кава',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: 'Блог про веб-розробку, javascript, typescript, vue.js українською' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [{ src: 'https://www.googletagmanager.com/gtag/js?id=G-KQVX1M1MP8', async: true },
        {
          children: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-KQVX1M1MP8');`
        }
      ]
    }
  },
  // app: {
  //   head: {
  //     script: [
  //       { src: ''}
  //     ]
  //   }
  // },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'one-dark-pro',
      preload: ['diff', 'ts', 'js', 'css', 'sql', 'xml', 'json']
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ],
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@nuxt/content'
  ]
})
