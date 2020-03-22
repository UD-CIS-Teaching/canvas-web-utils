const WebpackUserscript = require('webpack-userscript');

module.exports = {
    plugins: [
        new WebpackUserscript()
    ],
    node: {
        child_process: 'empty',
        fs: 'empty',
        crypto: 'empty',
        net: 'empty',
        tls: 'empty'
    },
}