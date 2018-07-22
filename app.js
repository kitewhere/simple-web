var bs = require('browser-sync').create();

/**
 * Run Browsersync with server config
 */
bs.init({
    server: 'src',
    index: 'index.html',
    files: ['src/assets/css/css'],
    open: false,
    watchOptions: {
        usePolling:true
    },
    plugins: [
        {
            module: 'bs-html-injector',
            options: {
                files: ['src/index.html']
            }
        }
    ]
});
