var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './public/_js/script.js'],
	output: {
        path: __dirname,
        filename: './public/build/script.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
        ],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
           compressor: {
             warnings: false
           }
        }),
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    }
};
