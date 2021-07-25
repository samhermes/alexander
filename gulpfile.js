'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');

gulp.task('sass', function () {
  var styleSass = gulp.src('./src/sass/alexander.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.dest('./docs/css'));
  return styleSass;
});

gulp.task('js', function () {
  var js = gulp.src('./src/js/**/*.js')
    .pipe(concat('alexander.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true,
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(gulp.dest('./docs/js'));
  return js;
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.parallel('sass', 'js', 'watch'));