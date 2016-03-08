
// 定义依赖项
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less');
 
// 定义 webserver 任务
gulp.task('webserver', function() {
    connect.server({
      livereload: true
    });
});
 
// 定义 less 任务
gulp.task('less', function() {
    gulp.src('styles/main.less')
        .pipe(less())
        .pipe(gulp.dest('styles'))
        .pipe(connect.reload());
});
 
// 定义 watch 任务
gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['less']);
})
 
// 定义默认任务
gulp.task('default', ['less', 'webserver', 'watch']);