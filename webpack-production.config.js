var WebpackStripLoader = require(‘strip-loader’);
var devConfig = require(‘./webpack.config.js’);

var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;