'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  var styleSass = gulp.src('./src/sass/alexander.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
  return styleSass;
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass', 'watch'));