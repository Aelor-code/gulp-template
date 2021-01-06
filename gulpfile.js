const {series} = require('gulp')
const tasks = require('./gulp//paths/tasks.js')

// Подключение тасков
tasks.forEach( task => require(task)() )

// Таск по умолчанию
exports.default = series('test')