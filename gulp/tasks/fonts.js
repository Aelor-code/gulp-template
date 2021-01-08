const {src, dest, task} = require('gulp')

module.exports = () => {
   task('fontsTask', () => {
      return src(path.fonts.src)
         .pipe(dest(path.fonts.dest))
         .pipe(server.stream())
   })
}