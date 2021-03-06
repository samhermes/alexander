'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  var styleSass = gulp.src('./src/sass/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'));
  return styleSass;
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass', 'watch'));