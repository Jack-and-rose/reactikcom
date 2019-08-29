const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWepackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

/**
 * 开发环境(development)和生产环境(production)的构建目标差异很大。
 * 在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)
 * 或热模块替换(hot module replacement)能力的 source map 和 localhost server。
 * 而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。
 * 由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。
 */

module.exports = {
    // entry: './src/index.js',
    // entry: {
    //     app: './src/index.js',
    //     print: './src/print.js'
    // },
    entry: {
        app: './app/index.js'
    },
    output: {
        // filename: 'bundle.js',
        // 根据入口起点名称动态生成bundle名称
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@app': path.join(__dirname, '../app'),
            '@apis': path.join(__dirname, '../apis'),
            '@components': path.join(__dirname, '../app/components'),
            '@configs': path.join(__dirname, '../app/configs'),
            '@reg': path.join(__dirname, '../app/configs/regular.config.js'),
            '@images': path.join(__dirname, '../app/images'),
            '@styles': path.join(__dirname, '../app/styles'),
            '@redux': path.join(__dirname, '../app/redux'),
            '@layouts': path.join(__dirname, '../app/components/layouts'),
            '@pages': path.join(__dirname, '../app/pages'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({template:'./app/index.html'}),
    ],
    // devServer: {
    //     historyApiFallback: true //刷新浏览器服务器重定向，因为是前端路由，后端没有对应的文件路径
    // },
    module: {
        rules: [
            { 
                test: /\.jsx?$/,  
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                } 
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}
