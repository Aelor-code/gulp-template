const {series, parallel} = require('gulp')
const tasks = require('./gulp//paths/tasks.js')

// Подключение путей
require('./gulp/paths/paths.js')

// Подключение тасков
tasks.map( task => require(task)() )

// Таск по умолчанию
exports.default = series(
   'jsonTask',
   parallel(
      'pugTask', 'stylesTask'
   ),
   parallel(
      'watchTask', 'serverTask'
   )
)