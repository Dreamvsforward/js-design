const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: './src/index.js',
        detail: './src/detail.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
      },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 10240
                    }
                } 
            },
            // {
            //     test: /\.(eot|ttf|svg)$/,
            //     use: {
            //         loader: 'file-loader'
            //     } 
            // }, 
            {
                test: /\.scss$/,
                use: [
                    'style-loader','css-loader','sass-loader','postcss-loader'
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new htmlWebpackPlugin({
            template: './detail.html',
            filename: 'detail.html',
            chunks: ['detail']
        })
    ]
}