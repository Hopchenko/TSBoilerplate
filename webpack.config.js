var webpack = require('webpack');

module.exports = {
	entry: './src/main.ts',
	output: {
		path:__dirname+'/dist',
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.js']
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{test: /\.ts$/, loader: 'ts-loader'}
		]
	}
};