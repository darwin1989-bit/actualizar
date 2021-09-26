module.exports = {
  title: 'ACTUALIZAR',
  description: "",
  dest:'docs',
  base:'/actualizar/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guia',
        link: '/',
      },
    ],
    sidebar: [
      '/',
      '/01-Generalidades/',
      '/02-Login/',
      '/03-Inicio/',
      '/04-Clientes/',
      '/05-Materiales/',
      '/06-Usuarios/',
      '/07-Tienda/',
      '/08-Servidores/',
      '/09-Vendedores/'
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    [
      'vuepress-plugin-zooming',
      {
        delay: 1000,
        options: {
          zIndex: 1000,
        },
      },
    ],
  ]
}
