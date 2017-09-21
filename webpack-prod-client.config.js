const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.client.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$|.jsx$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /public/, /bower_components/],
				query: {
					presets: [
						['es2015']
					]
				}

			}, {
				test: /\.scss$|.sass$/,
				exclude: [/node_modules/, /dist/],
				use: ExtractTextPlugin.extract([
					'css-loader?minimize',
					'sass-loader'
				])
			}, {
				test: /\.(jpe?g|png|gif|svg|pdf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[ext]_[name].[hash].[ext]'
						}
					}, {
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true
							},
							gifsicle: {
								interlaced: true
							},
							optipng: {
								optimizationLevel: 0
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('styles.min.css'),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}

		})
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss', '.css']
	}
};
