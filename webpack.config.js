var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'source-mapp',
    entry: {
        app: ['./assets/js/index.ts'],
        vendor: [
            'jquery',
            'bootstrap'
        ],
        vendor_css:'./assets/js/vendor.js'
    },
    output: {
        filename: '[name]-bundle.js',
        chunkFilename: '[name]-chunk.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin('dist', {} ), //keeping it clean and fresh
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:[
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.tsx?$/, // transpile .ts to js
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js']
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 600
    }
}