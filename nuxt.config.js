const environment = process.env.NODE_ENV || development;
const envSet = require(`./env/env.${environment}.js`);

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nihonskitchen-frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: '~/plugins/routerOption.js', ssr: false },
    // { src: "~/plugins/vue-js-modal", ssr: false }
  ],

  // Router settings
  router: {
    middleware: ['authenticated']
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAUNGagchHpBVxZX40hY2DYkm8DL_wZK9o",
          authDomain: "nihonskitchen.firebaseapp.com",
          databaseURL: "https://nihonskitchen-default-rtdb.firebaseio.com",
          projectId: "nihonskitchen",
          storageBucket: "nihonskitchen.appspot.com",
          messagingSenderId: "408975535078",
          appId: "1:408975535078:web:680cb14be919ead4e6c427"
        },
        services: {
          auth: true,
          storage: true,
          firestore: true,
        }
      }
    ],
    // '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa'
  ],
  env: envSet,
  axios: {
    proxy: true
  },
  proxy: {
    "/barcode/": {
      target: envSet.apiBaseUrl,
      pathRewrite: {
        "^/barcode/": "/barcode/"
      }
    },
    "/recipes": {
      target: envSet.apiBaseUrl,
      pathRewrite: {
        "^/recipes": "/recipes"
      }
    },
    "/users": {
      target: envSet.apiBaseUrl,
      pathRewrite: {
        "^/users": "/users"
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
    /*
   ** @nuxtjs/pwa Configuration
   ** https://github.com/nuxt-community/pwa-module
   */
  manifest: {
    name: "Nihon's Kitchen",
    lang: 'en',
    short_name: "Nihon's",
    title: "Nihon's Kitchen",
    'og:title': "Nihon's Kitchen",
    description: "Welcome to Nihon's Kitchen! This project was created as a means to help English-speaking residents in Japan to share their awesome recipes that use Japanese ingredients.",
    'og:description': "Welcome to Nihon's Kitchen! This project was created as a means to help English-speaking residents in Japan to share their awesome recipes that use Japanese ingredients.",
    theme_color: '#E5536A',
    background_color: '#F4F2EE'
  },
};
