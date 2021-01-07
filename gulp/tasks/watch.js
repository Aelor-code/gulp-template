const {task, watch} = require('gulp')

module.exports = () => {
   task('watchTask', () => {
      watch()
   })
}