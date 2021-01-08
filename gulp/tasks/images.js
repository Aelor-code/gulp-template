const {src, dest, task} = require('gulp')

module.exports = () => {
   task('imagesTask', () => {
      return src(path.images.src)
         .pipe(dest(path.images.dest))
         .pipe(server.stream())
   })
}