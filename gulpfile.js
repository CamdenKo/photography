var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
const rename = require('gulp-rename')
var del = require('del');

gulp.task('resize', () =>
    gulp.src('images/*.*')
        .pipe(imageResize({
            width: 1024,
            imageMagick: true
        }))
        .pipe(rename((path) => {
            if (path.basename[0] === '_') {
                path.basename = `img${path.basename}`
            }
        }))
        .pipe(gulp.dest('images/fulls'))
        .pipe(imageResize({
            width: 512,
            imageMagick: true
        }))
        .pipe(gulp.dest('images/thumbs')),
);

gulp.task('del', ['resize'], function () {
    return del(['images/*.*']);
});

gulp.task('default', ['del']);
