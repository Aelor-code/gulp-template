const {src, task} = require('gulp')
const ftp = require('gulp-ftp')
const util = require('gulp-util')

module.exports = () => {
   task('load', (cb) => {
      src(path.ftp.src)
         .pipe(ftp({
            host: path.ftp.host,
            user: path.ftp.user,
            pass: path.ftp.pass,
            remotePath: path.ftp.folder
         }))
         .pipe(util.noop())
      console.log(`-------\n${path.ftp.site}/${path.ftp.siteName}/_map.html\n-------`)
      cb()
   })
}