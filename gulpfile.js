var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

var htmlFiles = 'index.html';
var cssFiles = 'styles/*.css';


gulp.task('server', function () {
  connect.server({
    livereload: true,
    port: 8000
  })
});


gulp.task('html', function () {
  gulp.src(htmlFiles)
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src(cssFiles)
    .pipe(connect.reload());
});

gulp.task('webpack', function () {
  gulp.src('src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(htmlFiles, ['html']);
  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['server','watch', 'webpack']);