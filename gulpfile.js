function defaultTask(cb) {
   // place code for your default task here
   console.log('Выполнено');
   
   cb();
}

exports.default = defaultTask

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier');
var tinypng = require('gulp-tinypng-compress');
/* const htmlmin = require('gulp-htmlmin'); */

gulp.task('minify-css', () => {  
   return gulp.src('./src/css/*.css')
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('move-js', () => {
   return gulp.src('./src/js/*.js')
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest('dist/js/'));
});

/* gulp.task('htmlmin', () => {
   return gulp.src('./src/index.html')
      .pipe(htmlmin({
         collapseWhitespace: true,
         useshortdoctype: true
      }))
      .pipe(gulp.dest('dist/'));
}); */


gulp.task('minify', function () {
   return gulp.src('./src/*.html')
      .pipe(htmlmin({
         collapseWhitespace: true,
         useshortdoctype: true
      }))
      .pipe(gulp.dest('dist/'))
});

gulp.task('fonts', function (cb) {
   return gulp.src('./src/fonts/**/*')
   .pipe(gulp.dest('dist/fonts'));
   cb();
});

gulp.task('tinypng', function (cb) {
   return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(tinypng({
         key: 'ubHYlXS3Gu6K4WEg0ZIEK3LTTlJaQDCx'
      }))
      .pipe(gulp.dest('dist/img/'));
      cb();
});