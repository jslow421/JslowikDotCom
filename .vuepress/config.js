module.exports = {
  title: "John Slowik",
  description: "John is a software developer from Wisconsin",
  theme: "@vuepress/blog",
  themeConfig: {
    author: "John Slowik",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Resume", link: "/resume" },
      { text: "Posts", link: "/posts/" },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/jslow421",
        },
        {
          type: "linkedin",
          link: "https://linkedin.com/in/jslowik",
        },
        {
          type: "mail",
          link: "mailto:jslowik@gmail.com",
        },
      ],
      copyright: [
        {
          text: "John Slowik © 2023",
          link: "",
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "posts",
            dirname: "_posts",
            itemPermalink: "/posts/:year/:month/:day/:slug/",
            pagination: {
              lengthPerPage: 5,
            },
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: "tags",
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ["tags"],
            // Path of the `entry page` (or `list page`)
            path: "/tag/",
            // Layout of the `entry page` (list of tags)
            layout: "Tags",
            // Layout of the `scope page` (lsit of posts with this tag)
            scopeLayout: "Index",
          },
        ],
        sitemap: {
          hostname: "https://www.jslowik.com",
        },
      },
    ],
  ],
};
