const path = require('path');
const webpack = require('webpack');
var fs = require('fs');

module.exports = {
  entry: path.resolve(__dirname, 'server.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.server.js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: "css-loader?minimize" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }, {
        test: /\.(jpe?g|png|gif|svg|pdf)$/i,
        use: [
          'url-loader?limit=30000',
          'img-loader'
        ]
      }
    ]
  },
  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod;
    return ext
  }, {}),
  resolve: {
    extensions: ['.js', '.jsx']
  },

  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
};