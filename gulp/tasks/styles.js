const {src, dest, task} = require('gulp')
const stylus = require('gulp-stylus')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const groupMediaQueries = require('gulp-group-css-media-queries')
const gulpif = require('gulp-if')
const csso = require('gulp-csso')

module.exports = () => {
   task('stylesTask', () => {
      return src(path.styles.src)
         .pipe(gulpif(isDev, sourcemaps.init()))
         .pipe(stylus())
         .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 version'],
            cascade: true
         }))
         .pipe(groupMediaQueries())
         .pipe(gulpif(isDev, sourcemaps.write()))
         .pipe(gulpif(!isDev, rename({
            basename: path.styles.fileName
         })))
         .pipe(gulpif(!isDev, dest(path.styles.dest)))
         .pipe(rename({
            basename: path.styles.fileName + '.min'
         }))
         .pipe(gulpif(!isDev, csso()))
         .pipe(dest(path.styles.dest))
         .pipe(gulpif(isDev, server.stream()))
   })
}
