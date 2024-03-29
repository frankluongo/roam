// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
	      path.resolve(__dirname, './src/assets/sass/_globals.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Let\'s Roam',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/maps.json',
        typeName: 'Hunt',
        route: "/hunts/:data__key"
      }
    },
  ],
  chainWebpack: config => {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}
