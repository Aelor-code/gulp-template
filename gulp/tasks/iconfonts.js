const {src, dest, task} = require('gulp')
const iconFont = require('gulp-iconfont')
const iconFontCss = require('gulp-iconfont-css')
const fs = require('fs')

module.exports = () => {
   task('iconFontsTask', (cb) => {
      return fs.readdir(path.iconFonts.dir, function(err, files) {
         if (files.length) {
            src(path.iconFonts.src)
               .pipe(iconFontCss({
                  path: path.iconFonts.pathTemplate,
                  fontName: path.iconFonts.fontName,
                  targetPath: path.iconFonts.targetPath,
                  fontPath: path.iconFonts.fontPath
               }))
               .pipe(iconFont({
                  fontName: path.iconFonts.fontName,
                  prependUnicode: true,
                  formats: ['woff', 'woff2'],
                  timestamp: path.iconFonts.runTimestamp
               }))
               .pipe(dest(path.iconFonts.dest))
               .pipe(server.stream())
         }
         cb()
      })
   })
}