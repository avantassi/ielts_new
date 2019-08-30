var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    gcmq = require('gulp-group-css-media-queries'),
    svgSprite = require('gulp-svg-sprite'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace');

gulp.task('sass', function() {
    return gulp.src('src/sass/main.scss')
        .pipe(sass())
        .pipe(gcmq())
        .pipe(gulp.dest('css'))
})


gulp.task('watch', function () {
    gulp.watch('src/sass/*.scss', gulp.parallel('sass'));
});

//svg sprite

gulp.task('svgSprite', function () {
    return gulp.src('img/icons/*.svg') // svg files for sprite
        .pipe(svgSprite({
                mode: {
                    stack: {
                        sprite: "../sprite.svg"  //sprite file name
                    }
                },
            }
        ))
        // .pipe(cheerio({
        //     run: function ($) {
        //         $('[fill]').removeAttr('fill');
        //         $('[stroke]').removeAttr('stroke');
        //         $('[style]').removeAttr('style');
        //     },
        //     parserOptions: {xmlMode: true}
        // }))
        // .pipe(replace('&gt;', '>'))
        .pipe(gulp.dest('img/'));
});

