
import gulp from 'gulp';
import open from 'gulp-open';

// Task to open the browser
gulp.task('open-app', () => {
  return gulp.src('pages/dashboard.html')
    .pipe(open({uri: 'http://0.0.0.0:3000/pages/dashboard.html'}));
});

// Add server task
gulp.task('serve', () => {
  return import('gulp-connect').then((connect) => {
    connect.default.server({
      root: './',
      port: 3000,
      host: '0.0.0.0'
    });
  });
});

// Default task
gulp.task('default', gulp.series('serve', 'open-app'));
