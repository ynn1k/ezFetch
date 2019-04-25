const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const terser = require('gulp-terser'); //uglify ES6+
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// js minify & merge
gulp.task('scripts', function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat("ezFetch.js"))
        .pipe(terser())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/'));
});

// watch & serve
gulp.task("serve", gulp.series(["scripts"], function () {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(["./src/js/*.js"], gulp.series(["scripts"]));
}));

// default task
gulp.task("default", gulp.series(["serve"]));
