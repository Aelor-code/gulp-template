const {task, watch, series} = require('gulp')

module.exports = () => {
   task('watchTask', () => {
      watch(path.pug.watch, series('pugTask'))
   })
}