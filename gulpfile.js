const {series, parallel} = require('gulp')
const tasks = require('./gulp//paths/tasks.js')

// Подключение путей
require('./gulp/paths/paths.js')

// Подключение тасков
tasks.map( task => require(task)() )

// Таск по умолчанию
exports.default = series(
   'jsonTask', 'pluginsStylesTask', 'pluginsScriptsTask',
   parallel(
      'pugTask', 'stylesTask', 'scriptsTask'
   ),
   parallel(
      'watchTask', 'serverTask'
   )
)