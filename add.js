const fs = require('fs')

const blockName = process.argv[2] // имя блока
const extensions = uniqueArray(
   process.argv.slice(3).length
   ? process.argv.slice(3)
   : ['pug','json','styl','js']
   ) // расширения

if (blockName) {
   const dirPath = `#src/blocks/${blockName}` // путь к создаваемой папке

   // Создание папки
   fs.mkdir(dirPath, () => {
      extensions.map(extension => {
         let filePath = `${dirPath}/${blockName}.${extension}` // путь к файлу
         let fileContent = ''                                  // содержимое файла
         let fileImport = ''                                   // файл импорта
         let fileImportPath = ''                                   // файл импорта
         let fileImportString = ''                             // строка импорта файла

         switch (extension) {
            case 'pug':
               fileContent = `mixin ${blockName}()\n   .${blockName}&attributes(attributes)`
               fileImport = 'blocks.pug'
               fileImportPath = `#src/templates/pug/${fileImport}`
               fileImportString = `include ../../blocks/${blockName}/${blockName}\n`
            break
            case 'json':
               fileContent = '{}'
            break
            case 'styl':
               fileContent = ``
               fileImport = '_#main.styl'
               fileImportPath = `#src/templates/styles/${fileImport}`
               fileImportString = `'@import ../../blocks/${blockName}/${blockName}.styl'\n`
            break
         }

         // Создание файла
         if (fileExist(filePath) === false) {
            fs.writeFile(filePath, fileContent, err => {
               if (err) {
                  return console.log(err)
               }
               console.log(`${blockName}.${extension} - создан`)

               // Обновления файла с импортами
               if (fileImport) {
                  fs.appendFile(fileImportPath, fileImportString, err => {
                     if (err) {
                        return console.log(err)
                     }
                     console.log(`${fileImport} - обновлён`)
                  })
               }
            })
         } else {
            console.log(`${blockName}.${extension} - НЕ создан (уже существует)`)
         }
      })
   })
} else {
   console.log('Имя блока не указано')
}

// Сортировка расширений (убираем повторы)
function uniqueArray(arr) {
   return Array.from(new Set(arr))
}

// Проверка существования файла
function fileExist(path) {
   try {
      fs.statSync(path)
   } catch(err) {
      return !(err && err.code === 'ENOENT')
   }
}
