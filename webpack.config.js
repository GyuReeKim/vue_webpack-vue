const path = require('path')
// from path import path
const VueLoaderPlugin = require('vue-loader/lib/plugin') // webhack이 vue를 해석할 수 있도록 해준다.

module.exports = {
    mode: 'development',
    entry: {
        // __dirname 현재 폴더 이름
        app: path.join(__dirname, 'src', 'main.js')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
}