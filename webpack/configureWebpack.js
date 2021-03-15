const path = require('path')
const pathToInlineSvg = path.resolve(__dirname, '../src/atoms/icons')

module.exports = function ConfigureWebpack(config) {
  const rules = config.module.rules

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find(
    (rule) => rule.test && rule.test.test('.svg'),
  )
  if (fileLoaderRule) fileLoaderRule.exclude = pathToInlineSvg

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
      },
    ],
  })
  return config
}
