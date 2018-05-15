module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  
  base: "/",
  head: [],
  host: "localhost", // for dev
  port: 8080, // for dev
  dist: ".vuepress/dist",
  ga: "UA-119125576-1",
  
  themeConfig: {
    navbar: false,
    search: false,
    sidebar: [
      '/about',
      {
        title: "foo",
        collapsable: false,
        children: [
          '/foo/hoge',
        ]
      },
      {
        title: "bar",
        collapsable: true,
        children: [
          [ '/bar/fuga', 'alt fuga page name' ],
        ]
      },
    ]
  },

  markdown: {
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '§' },
    toc: { includeLevel: [2, 3] },
    config: md => {
      // md.use(require('markdown-it-xxx'))
    }
  }
}
