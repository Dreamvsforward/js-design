const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },       
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
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
            template: './index.html'
        })
    ]
}
