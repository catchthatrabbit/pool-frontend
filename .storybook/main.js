const ConfigureWebpack = require('../webpack/configureWebpack');
const fixStoryBookNotFindingModules = require('../webpack/fixStoryBookNotFindingModules');

const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.@(ts|tsx|js|jsx)"],
  // stories: ["../components/Button/*.stories.@(ts|tsx|js|jsx)"],
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
