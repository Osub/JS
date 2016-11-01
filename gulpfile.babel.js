/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';
//import { exec } from 'child_process';
//import eslint from 'gulp-eslint';
const paths = {
    allSrcJs: 'src/**/*.js?(x)',
    serverSrcJs: 'src/server/**/*.js?(x)',
    sharedSrcJs: 'src/shared/**/*.js?(x)',
    clientEntryPoint: 'src/client/app.js',
    gulpFile: 'gulpfile.babel.js',
    webpackFile: 'webpack.config.babel.js',
    libDir: 'lib',
    distDir: 'dist',
};
// gulp.task('lint', () =>
//     gulp.src([
//         paths.allSrcJs,
//         paths.gulpFile,
//     ])
//         .pipe(eslint())
//         .pipe(eslint.format())
//         .pipe(eslint.failAfterError())
// );

gulp.task('clean', () => del(paths.libDir));

gulp.task('build', ['clean'], () =>
    gulp.src(paths.allSrcJs)
        .pipe(babel())
        .pipe(gulp.dest(paths.libDir))
);

gulp.task('main', ['clean'], () =>
    gulp.src(paths.clientEntryPoint)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.distDir))
);

gulp.task('watch', () => {
    gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('default', ['watch', 'main']);




