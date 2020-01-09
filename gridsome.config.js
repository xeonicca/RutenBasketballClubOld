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
        // or scss
        path.resolve(__dirname, './src/assets/variables.scss'),
      ],
    })
}

module.exports = {
  siteName: 'RUTEN BASKETBALL CLUB',
  icon: './src/assets/favicon.png',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tableName: 'Players', //required
        typeName: 'Players', //required - needs to match template name
        // route: '/events/:name' //optional
      }
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tableName: 'Teams', //required
        typeName: 'Teams', //required - needs to match template name
        route: '/teams/:id' //optional
      }
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tableName: 'Games', //required
        typeName: 'Games', //required - needs to match template name
        // route: '/events/:name' //optional
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'RUTEN BASKETBALL CLUB',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'RUTEN BASKETBALL',
        themeColor: '#0b409c',
        backgroundColor: '#ffffff',
        icon: [{
          "src": "https://www.ruten.com.tw/images/mobile/shortcut_icon_192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "https://www.ruten.com.tw/images/mobile/shortcut_icon_180.png",
          "sizes": "180x180",
          "type": "image/png"
        }], // must be provided
        msTileImage: '',
        msTileColor: '#0b409c'
      }
    }
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
