const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.client.js',
  },
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /dist/, /bower_components/],
        query: {
          presets: [
            ['es2015']
          ]
        }

      }, {
        test: /\.scss$|.sass$/,
        exclude: [/node_modules/, /dist/],
        use: [
          'css-loader?minimize',
          'sass-loader?includePaths[]=./node_modules'
        ],
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css']
  }
};