module.exports = {
    title: 'John Slowik',
    description: 'My Site',
    theme: 'default-prefers-color-scheme',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            { text: 'Resume', link: '/resume' },
            { text: 'Posts', link: '/posts' }
        ],
        sitemap: {
            hostname: 'https://www.jslowik.com'
        },
    },
    plugins: [
        // ['@vuepress/blog'],
        // {
        //     directories: [
        //         {
        //             id: 'post',
        //             dirname: '_posts',
        //             path: '/post',
        //             itemPermalink: '/post/:year/:month/:day/:slug',
        //             pagination: {
        //                 lengthPerPage: 5
        //             }
        //         }
        //     ]
        // }
    ]
}
