const {src, dest, task} = require('gulp')
const pug = require('gulp-pug')
const notify = require('gulp-notify')
const fs = require('fs')

module.exports = () => {
   task('pugTask', () => {
      return src(path.pug.src)
         .pipe(pug({
            locals: {
               main: JSON.parse(fs.readFileSync(path.json.dest + path.json.name, 'utf-8'))
            },
            pretty: true
         }))
         .on('error', notify.onError(error => {
            return {
               title: 'Pug',
               message: error.message
            }
         }))
         .pipe(dest(path.pug.dest))
         .pipe(server.stream())
   })
}