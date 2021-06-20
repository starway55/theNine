const path = require('path');
const npm_package = require('./package.json')

module.exports = {
  entry: './index.js',
  // resolve: {
  //   root: __dirname,
  //   alias: npm_package._moduleAliases || {},
  //   modules: npm_package._moduleDirectories || [] // eg: ["node_modules", "node_modules_custom", "src"]
  // },
  resolve: {
    alias: {
      logger: path.resolve(__dirname, 'src/logger')
    },
    extensions: ['.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js'
  },
  target: 'node',
  

};