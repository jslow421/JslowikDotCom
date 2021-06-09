module.exports = {
    title: 'John Slowik',
    description: 'My Site',
    theme: '@vuepress/blog',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Resume', link: '/resume' },
        { text: 'Posts', link: '/posts' }
      ],
      footer: {
        contact: [
          {
            type: "github",
            link: "https://github.com/jslow421"
          },
          {
            type: "twitter",
            link: "https://twitter.com/jslow421"
          },
          {
            type: "mail",
            link: "mailto:jslowik@gmail.com"
          }
        ],
        copyright: [
          {
            text: "John Slowik © 2021",
            link: ""
          }
        ]
      },
    },
    plugins: [
      '@vuepress/blog',
      {
        id: 'posts',
        dirname: '_posts',
        path: '/posts/',
        layout: 'IndexPost',
        itemLayout: 'MyPost',
        itemPermalink: '/posts/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 2,
        },
      }
    ],
  }