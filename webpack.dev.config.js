const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
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
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, './release'), // 根目录
        open: true, // 自动打开浏览器
        port: 9000
    }
}
// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//       path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   }
// };