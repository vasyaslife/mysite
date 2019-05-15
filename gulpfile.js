var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

function css_style(done) { 
gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init()) 
    .pipe( sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
    }) )
    .on('error', console.error.bind(console)) 
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe( rename({suffix: '.min'}) )
    .pipe(sourcemaps.write('./'))
    .pipe( gulp.dest('./css/') );

    done();
}

function watchSass() {
    gulp.watch('./scss/**/*', css_style);
    
}

gulp.task('default', watchSass);
