const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'index_bundle.js',
		publicPath: '/',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				use: 'file-loader',
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	resolve: {
		modules: ['node_modules', 'src'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon-32x32.png',
		}),
	],
	devServer: {
		host: '0.0.0.0',
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: process.env.PORT,
		progress: true,
		historyApiFallback: true,
		proxy: {
			'/api': {
				target: `http://${process.env.API_HOST}:${process.env.API_PORT}`,
				// pathRewrite: { '^/api': '' },
			},
		},
	},
	performance: {
		hints: false,
	},
}
