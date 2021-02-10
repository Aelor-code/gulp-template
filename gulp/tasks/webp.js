const {src, dest, task} = require('gulp')
const webp = require('gulp-webp')

module.exports = () => {
   task('webpTask', () => {
      return src(path.webp.src)
         .pipe(webp())
         .pipe(dest(path.webp.dest))
         .pipe(server.stream())
   })
}
