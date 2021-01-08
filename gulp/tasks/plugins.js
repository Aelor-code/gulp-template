const {src, dest, task} = require('gulp')
const concat = require('gulp-concat')

module.exports = () => {
   task('pluginsStylesTask', () => {
      return src(path.plugins.styles.src)
         .pipe(concat(path.plugins.styles.fileName))
         .pipe(dest(path.plugins.styles.dest))
         .pipe(server.stream())
   })


   task('pluginsScriptsTask', () => {
      return src(path.plugins.scripts.src)
         .pipe(concat(path.plugins.scripts.fileName))
         .pipe(dest(path.plugins.scripts.dest))
         .pipe(server.stream())
   })
}