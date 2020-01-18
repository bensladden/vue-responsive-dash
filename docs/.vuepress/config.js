const webpack = require('webpack')
const { version } = require('../../package.json')
module.exports = {
	title: 'Vue-Responsive-Dash Docs',
	description: 'Welcome to Vue-Responsive-Dash Docs',
	markdown: {
		lineNumbers: true,
	},
	chainWebpack: (config) => {
		config.plugin('version-env').use(webpack.EnvironmentPlugin, [
			{
				VERSION: version,
			},
		])
	},
	themeConfig: {
		repo: 'bensladden/vue-responsive-dash',
		repoLabel: 'GitHub',
		docsDir: 'docs',
		docsBranch: 'master',
		lastUpdated: 'Last Updated',
		sidebarDepth: 2,
		nav: [
			{
				text: 'Guide',
				items: [
					{ text: 'Getting Started', link: '/guide/#getting-started',  target:'_blank'},
					{ text: 'Setup', link: '/guide/#setup',  target:'_blank' },
					{ text: 'How to Use with Vue', link: '/guide/#how-to-use-with-vue', target:'_blank' },
					{ text: 'Support', link: '/guide/#support' },
					{ text: 'Contributing', link: '/guide/#contributing' },
					{ text: 'Bug Report', link: '/guide/#bug-report' }
				]
			}, {
				text: 'API',
				items: [
					{ text: 'Dashboard', link: '/api/#dashboard' },
					{ text: 'Layout', link: '/api/#layout' },
					{ text: 'Dash Item', link: '/api/#dash-item' }

				]
			}, {
				text: 'Examples',
				items: [
					{ text: 'Green', link: '/examples/#green' }
				]
			}
		]
	},
	plugins: ['@vuepress/last-updated',
		'vuepress-plugin-typescript',
		{
		  tsLoaderOptions: {
			// All options of ts-loader
		  },
		}
	  ]

		
}