const {src, dest, task} = require('gulp')
const concat = require('gulp-concat')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

module.exports = () => {
   task('scriptsTask', () => {
      return src(path.scripts.src)
         .pipe(concat(path.scripts.fileName))
         .pipe(gulpif(!isDev, dest(path.scripts.dest)))
         .pipe(rename({
            suffix: '.min'
         }))
         .pipe(gulpif(!isDev, uglify()))
         .pipe(dest(path.scripts.dest))
         .pipe(gulpif(isDev, server.stream()))
   })
}
