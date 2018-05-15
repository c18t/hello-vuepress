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
  }
}
