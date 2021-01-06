const {src, dest, task} = require('gulp')

module.exports = () => {
   task('test', (cb) => {
      console.log('test')
      cb()
   })
}