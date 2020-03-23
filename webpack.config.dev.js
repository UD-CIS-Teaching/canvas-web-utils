const path = require('path')
const WebpackUserscript = require('webpack-userscript')

module.exports = (env, options) => {
    const dev = options.mode === "development";
    return {
        mode: dev ? 'development' : 'production',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
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
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist')
        },
        plugins: [
            new WebpackUserscript({
                headers: {
                    version: dev ? `[version]-build.[buildNo]` : `[version]`,
                    match: "https://*.instructure.com/courses/*",
                    grant: "none"
                }
            })
        ],
        node: {
            child_process: 'empty',
            fs: 'empty',
            crypto: 'empty',
            net: 'empty',
            tls: 'empty'
        },

    }
}