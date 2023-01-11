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
