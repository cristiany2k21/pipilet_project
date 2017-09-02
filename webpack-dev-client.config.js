const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch', //HRM
    'webpack-hot-middleware/client', //HMR
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.client.js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
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
  resolve: {
    extensions: ['.scss', '.js', '.jsx', '.jpg', '.png']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(), //HMR
    new webpack.HotModuleReplacementPlugin(), //HMR
    new webpack.NoEmitOnErrorsPlugin(), //HMR
  ],
};