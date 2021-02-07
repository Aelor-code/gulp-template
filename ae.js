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

const method = process.argv[2]// тип операции (удаление/добавление)
const blockName = process.argv[3] // имя блока
const extensionsPosition = (process.argv[4] === '-')
	? 5
	: 4
const extensions = uniqueArray(
	process.argv.slice(extensionsPosition).length
	? process.argv.slice(extensionsPosition)
	: ['pug','cson','styl','js'] // расширения по умолчанию
) // расширения

if (method !== 'add' && method !== 'rm') {
	return console.log('Тип операции не указан')
}

if (blockName) {
	const dirPath = `#src/blocks/${blockName}` // путь к указанному блоку

	// удаление
	if (method === 'rm') {
		console.log('Удаление')
	}

	// добавление
	else if (method === 'add') {
		console.log('Добавление')
	}

} else {
	console.log('Имя блока не указано')
}


// Сортировка расширений (убираем повторы)
function uniqueArray(arr) {
	return Array.from(new Set(arr))
}

// Убрать из массива указанные расширения
function clearArray(arr) {}
