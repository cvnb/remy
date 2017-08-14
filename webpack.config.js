var packageJSON = require('./package.json');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules').filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
}).forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

console.log("dev configuration loading");

module.exports = {
  context: __dirname + "/spa/src",
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./rat/public/javascripts'),
    publicPath: 'public/javascripts/'
  },
  // other loaders, plugins etc. specific for frontend
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /.json$/,
        loader: 'json-loader'
      }
    ]
  },
  devtool: 'sourcemap',
  /*watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },*/
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    contentBase: './rat/public/',
    inline: true,
    disableHostCheck: true
  }
};
