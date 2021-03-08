const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'TuandungIT Blog',
  titleIcon: "/favicon.ico",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "💥The simple personal blog create by tuandungit",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    [
      "link",
      {
        rel: "touch-icon",
        href: "/touch-icon.png",
        type: "image/png",
      },
    ],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  markdown: {
    lineNumbers: true,
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'blog-vuetify',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/",
        itemPermalink: "/post/:slug",
        frontmatter: {
          home: true,
        },
      },
    ],

    globalPagination: {
      lengthPerPage: 3,
    },

    titleIcon: "pencil-box-outline",
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      profile: {
        avatarUrl: "/avatar.jpg",
        name: "Tuandungit",
        subTitle: "Software Engineering",
        descriptionHtml:
            "Welcome to my blog. Mình là Dũng, bạn có thể xem thêm về mình tại đây <a href='/about'> About me</a>",
      },

    },
    sns: {
      github: "https://github.com/dungnt-1525/",
      feed: "",
    },
    sitemap: true,

    feed: {
      rss: true,
      atom: false,
      json: false,
    },

    ga: "UA-190755179-1",

    seo: {
      baseUrl: "https://tuandung.xyz/",
      author: "https://www.facebook.com/tuandungit.1712",
      image: "/avatar.jpg",
      articleDirectoryNames: ["_posts", "_pages"],
    },

    summary: 300,

    dateFormat: "DD/MM/YYYY",


  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
