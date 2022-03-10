export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'European Impact Hub',
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
    { src: '~/plugins/storyblok-rich-text-renderer.js', mode: 'client' },
    { src: '~/plugins/vue-slick-carousel.js', mode: 'client' },
    { src: '~/plugins/vue-snip.js', mode: 'client' },
    { src: '~/plugins/storyblok-rich-text-renderer.js' },
  ],

  env: {
    baseUrl: process.env.HOST_NAME || 'http://localhost:3000'
  },

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
    'vue-social-sharing/nuxt',
    'nuxt-clipboard',
    [
      "@storyblok/nuxt",
      {
        accessToken: "xVQgyAgzqeM0kPWUFx61Lwtt",
        cacheProvider: "memory",
      },
    ],
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
  clipboard: {
    autoSetContainer: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  server: {
    port: 3333
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },

  generate: {
    fallback: true,
    routes: function (callback) {
      const token = process.env.STORYBLOK_SPACE_TOKEN;
      const version = 'published';
      let cache_version = 0;

      let toIgnore = ['home', 'en/settings'];

      // other routes that are not in Storyblok with their slug.
      let routes = ['/']; // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {

        // timestamp of latest publish
        cache_version = space_res.data.space.version;

        // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (!toIgnore.includes(res.data.links[key].slug)) {
              routes.push('/' + res.data.links[key].slug);
            }
          });

          callback(null, routes);
        });
      });
    },
  },
}
