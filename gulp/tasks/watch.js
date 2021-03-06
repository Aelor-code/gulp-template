const {task, watch, series} = require('gulp')

module.exports = () => {
   task('watchTask', () => {
      watch(path.pug.watch, series('pugTask'))
      watch(path.json.watch, series('jsonTask', 'pugTask'))
      watch(path.styles.watch, series('stylesTask'))
      watch(path.scripts.watch, series('scriptsTask'))
      watch(path.plugins.styles.watch, series('pluginsStylesTask'))
      watch(path.plugins.scripts.watch, series('pluginsScriptsTask'))
      watch(path.fonts.watch, series('fontsTask', 'fontsStyleTask'))
      watch(path.images.watch, series('imagesTask'))
      watch(path.iconFonts.watch, series('iconFontsTask'))
      watch(path.webp.watch, series('webpTask'))
      watch(path.fonts.ttf.watch, series('ttfConvertTask', 'clearFontsTask'))
   })
}
