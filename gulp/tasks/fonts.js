const {src, dest, task} = require('gulp')
const fs = require('fs')

module.exports = () => {
   task('fontsTask', () => {
      return src(path.fonts.src)
         .pipe(dest(path.fonts.dest))
         .pipe(server.stream())
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
                  let str = `@include fontFace("${fontName}","${fileName}","${fontWeight}","${fontStyle}")\r\n`
                  fs.appendFile(path.fonts.styles.fileStyle, str, ()=>{})
               }

               fileNameTest = fileName
            })
         }
         cb()
      })
   })
}