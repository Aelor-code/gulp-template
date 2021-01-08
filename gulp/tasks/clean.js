const {src, dest, task} = require('gulp')
const clean = require('del')

module.exports = () => {
   task('cleanTask', () => {
      return clean([
         destFolder
      ])
   })
}