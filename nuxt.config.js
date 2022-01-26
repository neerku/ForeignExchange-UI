// this is required to ensure nuxt.config.js can access the process.env.VAR_NAME
// require('dotenv').config()
// require('dotenv').config({ path: '.env.development' }) // {path: `.env.${process.env.ENV_FILE}`}
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  
  asyncScripts:true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Time Series| Mongo',
    meta: [
      { charset: 'utf-8' },
      { name:"viewport", content:"initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no" },
      { hid: 'description', name: 'description', content: 'Time Series' },
      { hid: 'og:title', name: 'og:title', content: 'Time Series' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Time Series' },
      { hid: 'og:description', name: 'og:description', content: 'Time Series' },
      { name: 'format-detection', content: 'telephone=no' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/vendor.sass',
    '~/assets/style/dfd.sass',
    '~/assets/icon/nunify-icons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bus.client.js' },
    { src: '~/plugins/primevue.js' },
    { src: '~/plugins/clipboard.js' },
    { src: '~/plugins/vue-html2pdf.js' },
  ],

  extendPlugins(plugins) {
    plugins.unshift('~/plugins/bus.client.js')
    return plugins
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
     // this is required to ensure the rest of Nuxt.js can access the process.env.VAR_NAME
    // '@nuxtjs/dotenv'
    // ['@nuxtjs/dotenv', { filename: `.env.${process.env.ENV_FILE}` }]
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    '@nuxtjs/applicationinsights',
    '@nuxtjs/auth-next',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr' },
          { code: 'es', iso: 'es-ES', file: 'es.json', dir: 'ltr' },
        ],
        defaultLocale: 'en',
        langDir: 'locales/',
        strategy:'no_prefix'
      },
    ],
  ],

  router: {
    // middleware: ['auth']
  },

  styleResources: {
    scss: ['~/assets/style/config.sass'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  appInsights: {
    instrumentationKey: process.env.APPINSIGHTS_INSTRUMENTATION_KEY
  },

  mapBox:{
    baseURI:process.env.MAPBOX_BASE_URI,
    publicKey:process.env.MAPBOX_PUBLIC_KEY
  },

  apollo: {
    clientConfigs: {
      default: '~/plugins/nuxt-apollo-config.js'
    },
    errorHandler: '~/plugins/apollo-error-handler.js',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {
      fileName: 'icon.png?v1',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

}
