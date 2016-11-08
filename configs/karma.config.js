var webpackConfig = require('./webpack.config-dev.js');

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            { pattern: 'test-context.config.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            //'test-context.config.js': ['webpack', 'sourcemap'],
            //'./../**/tests/*.spec.js': ['babel'],
            //'./../**/js/*.js': ['coverage']
        },
        //reporters: ['mocha', 'progress', 'coverage'],
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        logLevel: config.LOG_DEBUG,
    });
};
