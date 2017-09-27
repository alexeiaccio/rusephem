module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'rusephem',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: 'Nuxt + NetlifyCMS + Netlify'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  generate: {
    routes: [
      '/',
      '/new'
    ]
  },
  /**/
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-meta'
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    /*,
        extend(config, ctx) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.md$/,
            loader: 'vue-markdown-loader',
            options: {
              use: [
                require('markdown-it-meta')
              ]
            }     
          })
        }*/
  }
}