const path = require('path');
const WebpackUserscript = require('webpack-userscript');

const RAW_DOWNLOAD_URL = "https://github.com/UD-CIS-Teaching/canvas-web-utils/raw/master/dist/canvas-web-utils.user.js";

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'canvas-web-utils.user.js'
    },
    plugins: [
        new WebpackUserscript({
            headers: {
                version: `[version]`,
                match: "https://*.instructure.com/courses/*",
                grant: "none",
                updateURL: RAW_DOWNLOAD_URL,
                downloadURL: RAW_DOWNLOAD_URL
            }
        })
    ]
}