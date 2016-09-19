module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/**/*.spec.ts'
        ],
        preprocessors: {
            'test/**/*.spec.ts': ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ['', '.ts', '.js', ".tsx"]
            },
            module: {
                loaders: [{
                    test: /\.tsx?$/,
                    loader: "ts-loader"
                }]
            }
        },
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    })
};
