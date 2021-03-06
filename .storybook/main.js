const ConfigureWebpack = require('../webpack/configureWebpack');
const fixStoryBookNotFindingModules = require('../webpack/fixStoryBookNotFindingModules');

module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    '@storybook/addon-essentials',
    "@storybook/addon-links",
    '@storybook/addon-controls'
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: (...args) => fixStoryBookNotFindingModules(ConfigureWebpack(...args))
};
