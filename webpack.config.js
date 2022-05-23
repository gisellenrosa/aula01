const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV != 'production';


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "eval-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebPackPlugin ({
          template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use:  "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:  ["style-loader", 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use:  ["style-loader", 'css-loader', "sass-loader"]
            }
        ]
    }
};