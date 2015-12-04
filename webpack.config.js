var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server'
    ],
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '/public/'),
        publicPath: '/public/'
    },
    resolve: {
        extensions: [
            '', '.js', '.json', '.jsx'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loaders: ['json']
            }, {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot', 'jsx-loader', 'babel-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot','jsx-loader', 'babel-loader'
                ]
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.(ico|jpe?g|png|gif)$/,
                loaders: ['file?name=[path][name].[ext]&context=./src']
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loaders: ['file?name=[path][name].[ext]&context=./src']
            }, {
                test: /\.(html|txt)$/,
                loaders: ['file?name=[path][name].[ext]&context=./src']
            }
        ]
    },
    plugins: ([
        new webpack.HotModuleReplacementPlugin()
    ])
};
