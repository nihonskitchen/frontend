// const environment = process.env.NODE_ENV || development;
// const envSet = require(`./env.${environment}.js`);

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
  plugins: [],

  // Router settings
  router: {
    middleware: ['authenticated']
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

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
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  // env: envSet,
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   "/jancode": {
  //     target: envSet.apiBaseUrl,
  //     pathRewrite: {
  //       "^/jancode": "/jancode"
  //     }
  //   }
  // },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
