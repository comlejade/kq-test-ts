const path = require('path');
// const BabelCache = require('@remax/plugin-babel-cache');
const less = require('@remax/plugin-less');

module.exports = {
    plugins: [
        less({
            lessOptions: {
                modifyVars: { '@brand-primary': '#2780d9' },
                javascriptEnabled: true
            }
        }),
        // BabelCache({cacheDir: path.resolve(__dirname, '.cache')})
    ],
    configWebpack({config, webpack}) {
        config.resolve.alias.set('@', path.resolve(__dirname, './src/'));
        config.resolve.alias.set('lib', path.resolve(__dirname, './public/lib'));
    }
};