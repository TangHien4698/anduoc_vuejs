module.exports = {
    // configureWebpack: {
    //     hints: false
    // },
    productionSourceMap: process.env.NODE_ENV!=='production',
    chainWebpack: config => {
        // remove the prefetch plugin
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');

    }
}
