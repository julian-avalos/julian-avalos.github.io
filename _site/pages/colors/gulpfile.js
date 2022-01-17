const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const minify = require('gulp-minify');
const log = require('fancy-log');
const GulpPostCss = require('gulp-postcss');

const sassSourceFile = 'sass/app.scss';
const jsSourceFile = 'js/app.js';
const cssOutputFolder = 'css';
const jsOutputFolder = 'js';
const watchedResources = 'sass/**/*';

gulp.task('js', function (done) {
  return gulp.src([jsSourceFile])
    .pipe(minify())
    .pipe(gulp.dest(jsOutputFolder))
})

gulp.task('scss', function (done) {
  gulp.src(sassSourceFile)
    .pipe(sass().on('error', function(err){
      log.error(err.message);
    }))
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(gulp.dest(cssOutputFolder))
    .on('end', done);
});

gulp.task('watch', gulp.series('scss', function (done) {
  gulp.watch(watchedResources, gulp.parallel('scss'));
  done();
}));

gulp.task('default', gulp.series('watch', 'js'));