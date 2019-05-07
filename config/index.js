'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const environments = {
  development: {
    // baseURL: '//adminapi.9000ji.com',
    baseURL: '//47.92.29.189:7012',
    // baseURL: '//192.168.0.178:7012',
    uploadBaseUrl: '//47.92.29.189:9001/upload',
    multiUploadBaseUrl: '//47.92.29.189:9001/multiUpload',
    payUrl: '//icic.9000ji.com'
  },
  testing: {
    baseURL: '//47.92.29.189:7012',
    uploadBaseUrl: '//47.92.29.189:9001/upload',
    multiUploadBaseUrl: '//47.92.29.189:9001/multiUpload',
    payUrl: '//icic.9000ji.com'
  },
    production: {
    baseURL: '//adminapi.9000ji.com',
    uploadBaseUrl: '//imgService.9000ji.com/upload',
    multiUploadBaseUrl: '//imgService.9000ji.com/multiUpload',
    payUrl: '//pay.9000ji.com'
  }
}
module.exports = {
  environment: environments[process.env.NODE_ENV],
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 9123, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
