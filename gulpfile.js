function defaultTask(cb) {
   // place code for your default task here
   console.log('Выполнено');
   
   cb();
}

exports.default = defaultTask

let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

gulp.task('minify-css', () => {  
   return gulp.src('./src/css/*.css')
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest('dist/css.'));
});

gulp.task('move-js', () => {
   return gulp.src('./src/js/*.js')
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest('dist/js/'));
});

gulp.task('htmlmin', () => {
   return gulp.src('./src/*.html')
      .pipe(htmlmin({
         collapseWhitespace: true
      }))
      .pipe(gulp.dest('dist'));
});

