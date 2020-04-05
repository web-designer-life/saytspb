var {src, dest, watch, series} = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

function bs() {
  serveSass();
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./scss/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
}

function serveSass() {
  return src("./sass/**/*.sass", "./scss/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

function buildCSS(done) {
  src('css/**/**.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/css/'));
  done();
}

function buildJS(done) {
  src(['js/**.js', '!js/**.min.js'])
    .pipe(minify({
      ext:{
        min:'.js'
      },
      noSource: true,

    }))
    .pipe(dest('dist/js'));
    src('js/**.min.js')
    .pipe(dest('dist/js'));
  done();
}

function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
  done();
}

function php(done) {
  src('**.php')
    .pipe(dest('dist/'));
  src('phpmailer/**/**')
    .pipe(dest('dist/phpmailer/'));
  done();
}

function imagemin(done) {
  src('img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: '28bQ8n6HVHMPdMP5Y0L47cxxVS9GCcRD',
      }))
    .pipe(dest('dist/img/'));
  src('img/**/**.{svg,ico}')
    .pipe(dest('dist/img/'));
  done();
}

exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, imagemin);
