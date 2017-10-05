const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = (env = {}) => {
    let config = merge(common(env), {
        output: {
            filename: '[name].[chunkhash].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new UglifyJSPlugin()
        ]
    });

    return config;
}