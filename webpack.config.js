const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ],
    output: {
        filename: '[name].bundle.[hash:5].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
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
                            config: { path: path.resolve(__dirname, 'dev/postcss.config.js') }
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
    mode: 'production' // 设置mode
};