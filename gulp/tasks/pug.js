const {src, dest, task} = require('gulp')
const pug = require('gulp-pug')

module.exports = function() {
   task('pugTask', () => {
      return src(path.pug.src)
         .pipe(pug({
            pretty: true
         }))
         .pipe(dest(path.pug.dest))
   })
}