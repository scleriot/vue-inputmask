var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/vue-inputmask.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'vue-inputmask.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}