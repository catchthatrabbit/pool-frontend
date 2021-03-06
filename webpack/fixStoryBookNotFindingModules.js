const path = require('path');
const pathToProject = path.resolve(__dirname, '../src');
const pathToImages = path.resolve(__dirname, '../public');

module.exports = function fixStoryBookNotFindingModules(config) {

  config.resolve.modules.push(pathToProject);
  config.resolve.modules.push(pathToImages);
  return config
}
