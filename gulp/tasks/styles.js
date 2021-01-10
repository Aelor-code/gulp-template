const {src, dest, task} = require('gulp')
const stylus = require('gulp-stylus')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const groupMediaQueries = require('gulp-group-css-media-queries')

module.exports = () => {
   task('stylesTask', () => {
      return src(path.styles.src)
         .pipe(sourcemaps.init())
         .pipe(stylus())
         .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 version'],
            cascade: true
         }))
         .pipe(groupMediaQueries())
         .pipe(sourcemaps.write())
         .pipe(rename({
            basename: path.styles.fileName
         }))
         .pipe(dest(path.styles.dest))
         .pipe(server.stream())
   })
}