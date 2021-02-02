const {src, dest, task} = require('gulp')
const concat = require('gulp-concat')
const cson = require('gulp-cson')

module.exports = () => {
   task('jsonTask', () => {
      return src(path.json.src)
         .pipe(concat(path.json.fileName))
         .pipe(cson())
         .pipe(dest(path.json.dest))
         .pipe(server.stream())
   })
}
