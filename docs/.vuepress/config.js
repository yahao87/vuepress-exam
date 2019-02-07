module.exports = {
  base: "/vuepress-exam/",
  title: "vuepress-exam",
  description: "test",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Interviews", link: "/interviews/" },
      { text: "Mixes", link: "/mixes/" }
    ]
  },
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false,
      permalinkSymbol: ""
    }
  }
};
