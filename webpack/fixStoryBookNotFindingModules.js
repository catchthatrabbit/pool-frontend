const path = require('path');
const pathToProject = path.resolve(__dirname, '../');

module.exports = function fixStoryBookNotFindingModules(config) {

  config.resolve.modules.push(pathToProject);
  return config
}
