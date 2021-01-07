const {src, dest, task} = require('gulp')
global.server = require('browser-sync').create()

module.exports = () => {
   task('serverTask', () => {
      server.init({
         server: destFolder
      })
   })
}