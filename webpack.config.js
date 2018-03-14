const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/main.ts',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'bundle.js',
		publicPath: ''
	},
	plugins: [new HtmlWebpackPlugin({
				title: 'CS409 A2 Typsecript WebGL2',
				filename: 'index.html',
				template: 'index.html'
			}
	),
		new CopyWebpackPlugin([
			{from: 'assets', to: 'assets'}
		])
	],
	resolve: {
		modules: [
			path.resolve('./node_modules')
		],
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},
	module: {
		loaders: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
			{
				test: /\.(glsl|vs|fs|frag|vert)$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(txt|obj|mtl|bmp|jpg)$/,
				loader: 'raw-loader'
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		hot: true
	},
	devtool: "source-map"
};

