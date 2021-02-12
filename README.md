## Установка
`npm i`

## Запуск

Для разработки
`gulp`

Для релиза
`gulp build`

## Добавление блоков в проект
`node ae add [имя блока] [исключение] [расширения]`

Примеры заполения
`node ae add header`   - создаст файлы header.pug, header.styl, header.cson, header.js

`node ae add header pug styl`   - создаст файлы header.pug, header.styl

`node ae add header - cson styl`  - создаст файлы header.pug, header.js (из списка по умолчанию [pug, cson, styl, js] убираются указанные в команде)

## Удаление блоков из проекта
`node ae rm [имя блока] [исключение] [расширения]`

Примеры заполения
`node ae rm header`   - удалит все файлы указанного блока

`node ae rm header pug styl`   - удалит файлы header.pug, header.styl

`node ae rm header - cson styl`  - удалит все файлы кроме указанных

## Шрифты
Для автоматического подключения шрифтов нужно поместить их в папку fonts в формате [имя шрифта]_[жирность шрифта]_[стиль шрифта]

`[имя шрифта]` - обязательно

`[жирность шрифта]` - не обязательно, если [стиль шрифта] не указывается (400 по умолчанию)

`[стиль шрифта]` - не обязательно (normal по умолчанию)

Пример
`Roboto.woff2` - подключится шрифт Roboto, font-weight: 400, font-style: normal

`Roboto_500.woff2` - подключится шрифт Roboto, font-weight: 500, font-style: normal

`Roboto_700_italic.woff2` - подключится шрифт Roboto, font-weight: 500, font-style: italic

Шрифты формата `ttf` автоматически конвертируются в `woff2` и подключаются. После конвертации шрифты `ttf` удаляются.

## Картинки
Картинки фортамов `jpg` и `png` автоматически конвертируются в `webp`

## Иконочный шрифт
Svg иконки для иконочного шрифта складываются в папку `images/iconFonts`.
Предварительно иконки нужно обработать на icomoon.io.
