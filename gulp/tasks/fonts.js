const {src, dest, task} = require('gulp')
const fs = require('fs')
const ttf2woff2 = require('gulp-ttf2woff2')
const changed = require('gulp-changed')
const clean = require('del')

module.exports = () => {
   task('fontsTask', () => {
      return src(path.fonts.src)
         .pipe(changed(path.fonts.dest))
         .pipe(dest(path.fonts.dest))
         .pipe(server.stream())
   })

   task('ttfConvertTask', () => {
      return src(path.fonts.ttf.src)
         .pipe(changed(path.fonts.dest), {extension: '.woff2'})
         .pipe(ttf2woff2())
         .pipe(dest(path.fonts.ttf.dest))
   })

   task('clearFontsTask', () => {
      return clean([
         path.fonts.ttf.src
      ])
   })

   task('fontsStyleTask', (cb) => {
      return fs.readdir(path.fonts.styles.files, function(err, files) {
         fs.writeFile(path.fonts.styles.fileStyle, '', ()=>{})
         if (files) {
            let fileNameTest
            files.map(file => {
               let fileName = file.split('.')[0]
               let fileArray = fileName.split('_')
               let fontName = fileArray[0] || fileName
               let fontWeight = fileArray[1] || '400'
               let fontStyle = fileArray[2] || 'normal'

               if ( fileNameTest !== fileName) {
                  let str = `fontFace("${fontName}","${fileName}","${fontWeight}","${fontStyle}")\r\n`
                  fs.appendFile(path.fonts.styles.fileStyle, str, ()=>{})
               }

               fileNameTest = fileName
            })
         }
         cb()
      })
   })
}
