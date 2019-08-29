var gulp = require('gulp');
var browserSync = require('browser-sync');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9001

gulp.task('serve', ['build'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: require('../../../config').port,
    ui: {
      port: require('../../../config').port + 1
    },
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
