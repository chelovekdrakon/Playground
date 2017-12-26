const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const CSSPlugin = new ExtractTextPlugin('app.css');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'bundle/')
    },
    module: {
        rules: [
            {
                test: /\.html/,
                loader: 'html-loader'
            },
            {
                test: /\.(css|scss)/,
                use: CSSPlugin.extract(['css-loader', 'autoprefixer-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        CSSPlugin,
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.HotModuleReplacementPlugin()
    ]
};
