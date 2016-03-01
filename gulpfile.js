var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('heroku:production', function(){
    runSeq('clean', 'build', 'minify')
});

gulp.task('default', ['connect']);
