const {src, dest, task} = require('gulp')
const concat = require('gulp-concat')

module.exports = () => {
   task('scriptsTask', () => {
      return src(path.scripts.src)
         .pipe(concat(path.scripts.fileName))
         .pipe(dest(path.scripts.dest))
         .pipe(server.stream())
   })
}