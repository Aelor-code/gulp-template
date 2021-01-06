const {src, dest, task, series} = require('gulp')


task('test', (cb) => {
    console.log('test')
    cb()
})

exports.default = series('test')