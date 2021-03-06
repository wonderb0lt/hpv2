var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/gen');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        // unsafeCache: true,
        modules: [ 'node_modules', './src/client/app' ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;