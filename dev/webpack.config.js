const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app:["./src/index.js",'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000']
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        })
    ],
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                          ident: 'postcss',
                          config: { path: path.resolve(__dirname, 'postcss.config.js') }
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    mode: 'development' // 设置mode
};