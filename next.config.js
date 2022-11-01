const ConfigureWebpack = require('./webpack/configureWebpack')

module.exports = {
  distDir: "/out",
  webpack: ConfigureWebpack,
}
