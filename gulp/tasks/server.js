const {src, dest, task} = require('gulp')
global.server = require('browser-sync').create()

module.exports = () => {
   task('serverTask', () => {
      server.init({
         server: {
            baseDir:destFolder,
            index: "_map.html"
         },
         notify: false
      })
   })
}
