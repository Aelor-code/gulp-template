const {src, dest, task} = require('gulp')
const sass = require('gulp-sass')

module.exports = () => {
   task('stylesTask', () => {
      return src(path.styles.src)
         .pipe(sass())
         .pipe(dest(path.styles.dest))
         .pipe(server.stream())
   })
}