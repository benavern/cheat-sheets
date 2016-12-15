const gulp = require('gulp'),
      fileinclude = require('gulp-file-include'),
      markdown = require('gulp-markdown'),
      sass = require('gulp-sass');

/**
 * default task, create dist/index.html file
 */
gulp.task('build', ['markdown-build', 'build-sass' ,'assets'], () => {
    return gulp.src(['./src/html/index.html'])
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('./dist/'));
});

/**
 * Converts sass to css
 */
gulp.task('build-sass', ['assets'], () => {
    return gulp.src(['./src/css/*.scss'])
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('./dist'))
});

/**
 * Build markdown files in dist folder
 */
gulp.task('markdown-build', () => {
    return gulp.src(['./src/html/markdown/column1.md', './src/html/markdown/column2.md', './src/html/markdown/column3.md'])
               .pipe(markdown())
               .pipe(gulp.dest('./dist'));
});

/**
 * Watch all files in src/html folder then run build task
 */
gulp.task('watch', ['build', 'assets'], () => {
   return gulp.watch(['./src/html/**', './src/css/**'], ['build']);
});

/**
 * Export assets
 */
gulp.task('assets', () => {
    return gulp.src('./assets/**/*')
               .pipe(gulp.dest('./dist/assets'));
});