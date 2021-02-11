const {src, dest, task} = require('gulp')
const gulpif = require('gulp-if')
const imagemin = require('gulp-imagemin')
const changed = require('gulp-changed')

module.exports = () => {
   task('imagesTask', () => {
      return src(path.images.src)
         .pipe(changed(path.images.dest))
         .pipe(gulpif(!isDev, imagemin([
             imagemin.gifsicle({interlaced: true}),
             imagemin.mozjpeg({quality: 75, progressive: true}),
             imagemin.optipng({optimizationLevel: 5}),
             imagemin.svgo({
                 plugins: [
                     {removeViewBox: true},
                     {cleanupIDs: false}
                 ]
             })
         ])))
         .pipe(dest(path.images.dest))
         .pipe(server.stream())
   })
}
