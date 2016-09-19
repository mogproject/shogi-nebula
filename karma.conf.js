//実行時引数から、テスト対象ファイルを選ぶ
// const args = process.argv;
// args.splice(0, 4);

//ポリフィルなどグローバルに入れておきたいものを置いておく。
const polyfils = [
    './node_modules/jquery/dist/jquery.min.js'
];

//var files = polyfils.concat(args);

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
          'test/**/*.spec.ts'
        ],
        preprocessors: {
            'test/**/*.spec.ts': ['webpack'],
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
