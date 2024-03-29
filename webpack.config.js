const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')



module.exports = {
    entry: './src/index.js',
    mode:'development',
    output:{
        path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
    },
    resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname,'./src/components/'),
            containers: path.resolve(__dirname, './src/containers/'),
            pages: path.resolve(__dirname, './src/pages/'),
            styles: path.resolve(__dirname, './src/styles/'),
            icons: path.resolve(__dirname, './src/assets/icons/'),
            logos: path.resolve(__dirname, './src/assets/logos/'),
            hooks: path.resolve(__dirname,'./src/hooks/'),
            context: path.resolve(__dirname, './src/context/'),
            routes: path.resolve(__dirname, './src/routes/'),
		}
	},
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
            },
            {
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
            {
				test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
			filename: './index.html'
        }),
        new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
        
    ],
    devServer: {
		historyApiFallback: true,
	}
}