module.exports = {
  head: {
    title: 'hanu_project',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'luyen'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel:"stylesheet", href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"},
      {rel: 'stylesheet', href: '/css/style.css'},
      {href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=vietnamese", rel:"stylesheet"},
    ],
    script: [
      {src: '/js/all.js'},
      {
        src: "https://code.jquery.com/jquery-3.3.1.min.js",
        integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
        crossorigin: "anonymous"
      },
      {src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"}
    ]
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push(
        {
          name: 'partner',
          path: '/partner',
          component: resolve('~/pages/Partner.vue')
        },
        {
          name: 'home',
          path: '/',
          component: resolve('~/pages/Home.vue')
        },
        {
          name: 'work',
          path: '/work',
          component: resolve('~/pages/Work.vue')
        },
        {
          name: 'about',
          path: '/about',
          component: resolve('~/pages/About.vue')
        },
        {
          name: 'menu',
          path: '/menu',
          component: resolve('~/pages/Menu.vue')
        },
        {
          name: 'awards',
          path: '/awards',
          component: resolve('~/pages/Awards.vue')
        },
      )
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/Loading.vue',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
