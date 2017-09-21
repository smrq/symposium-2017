const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DEBUG = !process.argv.includes('--release');

function cssLoaderOptions(options) {
	return Object.assign({
		minimize: !DEBUG && { reduceIdents: false },
		localIdentName: DEBUG ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64]',
	}, options);
}

module.exports = {
	entry: {
		bundle: './src/index'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: path.join(__dirname, 'src'),
				use: 'babel-loader'
			},
			{
				test: /\.s[ac]ss/,
				oneOf: [
					{
						include: path.join(__dirname, 'src'),
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: cssLoaderOptions({ modules: true })
							},
							'sass-loader'
						]
					}, {
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: cssLoaderOptions({ modules: false })
							},
							'sass-loader'
						]
					}
				]
			},
			{
				test: /\.css/,
				oneOf: [
					{
						include: path.join(__dirname, 'src'),
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: cssLoaderOptions({ modules: true })
							}
						]
					}, {
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: cssLoaderOptions({ modules: false })
							}
						]
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ hash: true }),
		new CopyWebpackPlugin([{ context: 'assets', from: '*' }])
	]
};
