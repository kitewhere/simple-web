var bs = require('browser-sync').create();

/**
 * Run Browsersync with server config
 */
bs.init({
    server: './app',
    index: 'index.htm',
    files: ['app/css/*.css'],
    open: false,
    watchOptions: {
        usePolling:true
    },
    plugins: [
        {
            module: 'bs-html-injector',
            options: {
                files: ['app/*.htm']
            }
        }
    ]
});
