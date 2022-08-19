const ConfigureWebpack = require('./webpack/configureWebpack')

module.exports = {
  distDir: "/out",
  devIndicators: {
    autoPrerender: false,
  },
  webpack: ConfigureWebpack,
}
