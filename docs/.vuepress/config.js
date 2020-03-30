const webpack = require("webpack");
const { version } = require("../../package.json");
module.exports = {
  title: "Vue-Responsive-Dash Docs",
  description: "Welcome to Vue-Responsive-Dash Docs",
  markdown: {
    lineNumbers: true
  },
  chainWebpack: config => {
    config.plugin("version-env").use(webpack.EnvironmentPlugin, [
      {
        VERSION: version
      }
    ]);
  },
  themeConfig: {
    repo: "bensladden/vue-responsive-dash",
    repoLabel: "GitHub",
    docsDir: "docs",
    docsBranch: "master",
    lastUpdated: "Last Updated",
    sidebarDepth: 2,
    nav: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/#getting-started" },
          { text: "Setup", link: "/guide/#setup" },
          { text: "How to Use with Vue", link: "/guide/#how-to-use-with-vue" },
          { text: "Support", link: "/guide/#support" },
          { text: "Contributing", link: "/guide/#contributing" },
          { text: "Bug Report", link: "/guide/#bug-report" }
        ]
      },
      {
        text: "API",
        items: [
          { text: "Dashboard", link: "/api/#dashboard" },
          { text: "Dash Layout", link: "/api/#dash-layout" },
          { text: "Dash Item", link: "/api/#dash-item" }
        ]
      },
      {
        text: "Plugins",
        items: [
          { text: "epic-spinners", link: "/plugins/#epicspinners" },
          { text: "Chartjs", link: "/plugins/#chartjs" },
          { text: "eCharts", link: "/plugins/#echarts" },
          { text: "FusionCharts", link: "/plugins/#fusioncharts" },
          { text: "Highcharts", link: "/plugins/#highcharts" }
        ]
      },
      {
        text: "Examples",
        items: [{ text: "Green", link: "/examples/#green" }]
      },
      {
        text: "Vuetify Examples",
        items: [
          {
            text: "Basic",
            link: "https://vue-responsive-dash-vuetify.netlify.com/#/"
          },
          {
            text: "Epic-Spinners",
            link:
              "https://vue-responsive-dash-vuetify.netlify.com/#/EpicSpinners"
          },
          {
            text: "Chartjs",
            link: "https://vue-responsive-dash-vuetify.netlify.com/#/Chartjs"
          },
          {
            text: "Echarts",
            link: "https://vue-responsive-dash-vuetify.netlify.com/#/Echarts"
          }
        ]
      }
    ]
  },
  plugins: ["@vuepress/last-updated", "vuepress-plugin-typescript"]
};
