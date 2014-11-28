var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('styles', function() {
    gulp.src(['static/less/main.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('static/build/css'));
        //.pipe(refresh(server))
});

gulp.task('icons', function() { 
    gulp.src('vendor/font-awsome/fonts/**.*') 
        .pipe(gulp.dest('static/build/fonts')); 
});

gulp.task('default', function() {
    gulp.run('styles');
    gulp.run('icons');
    gulp.watch('static/less/**', function(event) {
        gulp.run('styles');
    })

 });