const paths = {
    allSrcJs: 'src/**/*.js',
    gulpFile: 'gulpfile.babel.js',
    webpackFile: 'webpack.config.babel.js',
    libDir: 'lib',
    distDir: 'dist',
};

// [...]

// gulp.task('lint', () =>
//     gulp.src([
//         paths.allSrcJs,
//         paths.gulpFile,
//         paths.webpackFile,
//     ])
//         .pipe(eslint())
//         .pipe(eslint.format())
//         .pipe(eslint.failAfterError())
// );

export default {
    output: {
        filename: 'client-bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
};