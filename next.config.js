const ConfigureWebpack = require('./webpack/configureWebpack')

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack: ConfigureWebpack,
}
