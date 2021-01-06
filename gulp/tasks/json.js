const {src, dest, task} = require('gulp')
const merge = require('gulp-merge-json')

module.exports = () => {
   task('jsonTask', () => {
      return src(path.json.src)
         .pipe(merge({
            fileName: path.json.name
         }))
         .pipe(dest(path.json.dest))
   })
}