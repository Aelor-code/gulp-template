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
