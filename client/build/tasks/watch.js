const gulp = require('gulp');
const paths = require('../paths');
const browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  gulp.watch(paths.source, ['build-system']).on('change', reportChange);
  gulp.watch(paths.html, ['build-html']).on('change', reportChange);
  gulp.watch(paths.sass, ['build-sass']).on('change', reportChange);
  // gulp.watch(paths.css, ['build-css']).on('change', reportChange);
  gulp.watch(paths.css, ['build-css', function() {
    return gulp.src(paths.css).pipe(browserSync.stream());
  }
  ]).on('change', reportChange);
});
