const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build')

let main = {
    entry: './src/main.js',
    output: {
        path: BUILD_DIR,
        filename: 'main.js'
    },
    target: 'electron-main'
};

let renderer = {
    entry: './src/renderer.js',
    output: {
        path: BUILD_DIR,
        filename: 'renderer.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ['@babel/plugin-transform-runtime',
                                {
                                    regenerator: true
                                }
                            ],
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    target: 'electron-renderer'
};

module.exports = [main, renderer];