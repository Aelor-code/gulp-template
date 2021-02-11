const gulp = require('gulp')
const {src, dest, task} = require('gulp')
const webp = require('gulp-webp')
const changed = require('gulp-changed')

module.exports = () => {
   task('webpTask', () => {
      return src(path.webp.src)
         .pipe(changed(path.webp.dest))
         .pipe(webp())
         .pipe(dest(path.webp.dest))
         .pipe(server.stream())
   })
}
