global.folderName = require('path').basename(__dirname)
global.isDev = true
const {series, parallel} = require('gulp')
const tasks = require('./gulp//paths/tasks.js')

// Подключение путей
require('./gulp/paths/paths.js')

// Подключение тасков
tasks.map( task => require(task)() )

// Таск по умолчанию
exports.default = series(
   'cleanTask', 'iconFontsTask', 'ttfConvertTask', 'clearFontsTask',
   parallel(
      'jsonTask', 'fontsTask', 'pluginsStylesTask', 'pluginsScriptsTask'
   ),
   parallel(
      'pugTask', 'stylesTask', 'scriptsTask', 'fontsStyleTask', 'imagesTask', 'webpTask'
   ),
   parallel(
      'watchTask', 'serverTask'
   )
)

// Таск для релиза проекта
exports.build = series(
   'typeTask', 'cleanTask', 'iconFontsTask', 'ttfConvertTask', 'clearFontsTask',
   parallel(
      'jsonTask', 'fontsTask', 'pluginsStylesTask', 'pluginsScriptsTask'
   ),
   parallel(
      'pugTask', 'stylesTask', 'scriptsTask', 'fontsStyleTask', 'imagesTask', 'webpTask'
   )
)
