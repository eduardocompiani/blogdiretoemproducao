const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const del = require('del');
const sourceMaps = require('gulp-sourcemaps');

gulp.task('clean', () => {
    return del(['src/**/*-min.js']);
});

gulp.task('build:js', () => {
    return gulp.src('src/**/*.js')
        .pipe(sourceMaps.init())
            .pipe(
                babel({
                    presets: ['@babel/env']
                })
            )
            .pipe(
                rename({
                    extname: '-min.js'
                })
            )
            .pipe(uglify())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('src'));
});

gulp.task('build:css', () => {
    // console.log('Implementar');
    
    return gulp.src('src/**/*.css');
})

gulp.task('build', gulp.parallel('build:js', 'build:css'));

gulp.task('watch:js', () => {
    gulp.watch('src/**/*-dev.js', gulp.series('clean', 'build:js'));
});

gulp.task('default', gulp.series('clean', 'build'));