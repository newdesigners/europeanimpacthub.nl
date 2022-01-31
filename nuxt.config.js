export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'europeanimpacthub.nl',
    htmlAttrs: {
      lang: 'nl-NL'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-tasty-burgers.js', mode: 'client' },
    { src: '~/plugins/composition-api.js' },
    { src: '~/plugins/storyblok-rich-text-renderer.js', mode: 'client'},
    { src: '~/plugins/vue-slick-carousel.js', mode: 'client' },
    { src: '~/plugins/vue-snip.js', mode: 'client' },
    { src: '~/plugins/storyblok-rich-text-renderer.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  image: {
    storyblok: {
      baseURL: 'https://img2.storyblok.com',
    },
  },
  moment: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },
}
