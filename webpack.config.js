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
    }
};

module.exports = [main, renderer];