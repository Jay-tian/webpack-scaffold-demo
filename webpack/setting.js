const process = require('process');
const glob = require('glob');
const path = require('path');
const rootPath = process.cwd();

let purifyCssPaths = glob.sync(path.join(rootPath, './index.html'));
purifyCssPaths = purifyCssPaths.concat(glob.sync(path.join(rootPath, '/src/js/**/*.js')));

let setting = {
  entry: rootPath + '/src/js/',
  output: rootPath + '/public/dist/',
  mainJs: rootPath + '/src/js/app.js',
  lessPath: rootPath + '/src/less/pages',
  publicPath: '/dist/',
  author: 'tianshengjie',
  purifyCssPaths: purifyCssPaths,
};

module.exports = setting;