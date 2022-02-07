const ConfigureWebpack = require('../webpack/configureWebpack')
const fixStoryBookNotFindingModules = require('../webpack/fixStoryBookNotFindingModules')

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-controls',
    'storybook-addon-next-router',
  ],
  typescript: {
	  check: true, // type-check stories during Storybook build
    reactDocgen: false
  },
  core: {
    builder: "webpack5",
  },
  webpackFinal: (...args) =>
    fixStoryBookNotFindingModules(ConfigureWebpack(...args)),
}
