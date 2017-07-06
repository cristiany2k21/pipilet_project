const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'react-hot-loader/patch', //HRM
    'webpack-hot-middleware/client', //HMR
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.client.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader?minimize" // translates CSS into CommonJS
        }, {
          loader: "sass-loader?includePaths[]=./node_modules" // compiles Sass to CSS
        }]
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(), //HMR
    new webpack.HotModuleReplacementPlugin(), //HMR
    new webpack.NoEmitOnErrorsPlugin(), //HMR
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
  ],
}