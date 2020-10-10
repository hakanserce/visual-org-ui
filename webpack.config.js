/*global require, module, __dirname, process */
const path = require('path');
const ErudaWebpackPlugin = require('eruda-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.ts',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/')
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8000
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html')
		}),
		new ErudaWebpackPlugin({
			entry: /index\.js$/
		})
	]
}
