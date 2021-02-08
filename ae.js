// Скрипт добавления и удаления блоков в проекте

// Было
// node [имя файла] [имя блока] [расширения]

// План
// node [имя файла] [добавить/удалить] [имя блока] [исключения] [расширения]

// node ae add header          - добавить расширения по умолчанию
// node ae add header pug      - добавить указанные расширения
// node ae add header - js     - добавить расширения по умолчанию за исключением

// node ae rm header           - удалить всё
// node ae rm header json      - удалить указанные расширения
// node ae rm header - json    - удалить все расширения кроме указанных   	  (удалить папку если она остаётся пустой)

const fs = require('fs')
const readline = require('readline')

const extensionsDefault = ['pug','cson','styl','js'] // расширения по умолчанию

const method = process.argv[2]// тип операции (удаление/добавление)
const blockName = process.argv[3] // имя блока
const isException = (process.argv[4] === '-')
	? true
	: false // исключение или нет
const extensionsPosition = isException
	? 5
	: 4
let extensions = uniqueArray(
	process.argv.slice(extensionsPosition).length
	? process.argv.slice(extensionsPosition)
	: extensionsDefault
) // расширения


importClear({
	filePath: '#src/templates/styles/_#main.styl',
	str: 'test'
})

if (method !== 'add' && method !== 'rm') {
	return console.log('Тип операции не указан')
}

if (blockName) {
	const dirPath = `#src/blocks/${blockName}` // путь к указанному блоку

	// удаление
	if (method === 'rm') {

		// проверяем существует ли блок
		fs.stat(dirPath, err => {
			if (err && err.code === 'ENOENT') {
				return console.log(`папки ${blockName} - НЕ существует`)
			}

			// получаем расширения в папке
			fs.readdir(dirPath, (err, files) => {
				if (err) {
					return console.log(err)
				}

				// Список файлов в папке
				const filesArray = files.map(file => {
					return file
				})

				// Расширения в папке
				const folderExtensions = filesArray.map(file => {
					let fileArray = file.split('.')
					return fileArray[fileArray.length - 1]
				})

				// итоговый список расширений
				extensions = isException
					? clearArray(folderExtensions, extensions)
					: extensions

				// Удаляем файлы
				filesArray.map(file => {
					let fileArray = file.split('.')
					fileExtention = fileArray[fileArray.length - 1]

					if (checkArray(fileExtention,extensions)) {
						fs.unlink(`${dirPath}/${file}`, err => {
							if (err) {
								return console.log(err)
							}
							console.log(`${file} - удалён`)
						})

						switch (fileExtention) {
							case 'pug':
							break
							case 'styl':
							break
						}
					}
				})


			})
		})
	}

	// добавление
	else if (method === 'add') {

		// итоговый список расширений
		extensions = isException
			? clearArray(extensionsDefault, extensions)
			: extensions

		// Создание папки
		fs.mkdir(dirPath, () => {
			extensions.map(extension => {
				let filePath = `${dirPath}/${blockName}.${extension}` // путь к файлу
				let fileContent = '' // содержимое
				let fileImport = '' // файл импорта
				let fileImportPath = '' // файл импортам
				let fileImportString = '' // строка импорта файла

				switch (extension) {
					case 'pug':
						fileContent = `mixin ${blockName}()\n
						.${blockName}$attributes(attributes)`
						fileImport = 'blocks.pug'
						fileImportPath = `#src/templates/pug/${fileImport}`
						fileImportString = `include ../../blocks/${blockName}/${blockName}\n`
					break
					case 'styl':
						fileImport = '_#main.styl'
						fileImportPath = `#src/templates/styles/${fileImport}`
						fileImportString = `@import '../../blocks/${blockName}/${blockName}.styl'\n`
					break
				}

				// Создание файла
				if (fileExist(filePath) === false) {
					fs.writeFile(filePath, fileContent, err => {
						if (err) {
							return console.log(err)
						}
						console.log(`${blockName}.${extension} - создан`)

						// Обновление файла с импортами
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
	}

} else {
	console.log('Имя блока не указано')
}


// Сортировка расширений (убираем повторы)
function uniqueArray(arr) {
	return Array.from(new Set(arr))
}

// Убрать из массива указанные расширения
function clearArray(mainArray, arr) {
	return mainArray.filter( el => !arr.includes(el))
}

// Проверка существования файла
function fileExist(path) {
	try {
		fs.statSync(path)
	} catch(err) {
		return !(err && err.code === 'ENOENT')
	}
}

// Проверка наличия элемента в массиве
function checkArray(el,array) {
	return array.includes(el)
}


// Очистка файла от инклюда
function importClear(obj) {
	const rd = readline.createInterface({
		input: fs.createReadStream(obj.filePath)
	})
	rd.on('line', function(line) {
		if (line.indexOf(obj.str) !== -1) {
			console.log('Совпадение')
		}
	})
}
