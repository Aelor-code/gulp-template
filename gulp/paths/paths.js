global.srcFolder = './#src'
global.destFolder = './build'

global.path = {
   pug: {
      src: `${srcFolder}/pages/*.pug`,
      dest: `${destFolder}/`,
      watch: [
         `${srcFolder}/pages/*.pug`,
         `${srcFolder}/blocks/**/*.pug`
      ]
   },
   json: {
      name: 'main.json',
      src: `${srcFolder}/blocks/**/*.json`,
      dest: `${srcFolder}/templates/json/`,
      watch: `${srcFolder}/blocks/**/*.json`
   },
   styles: {
      fileType: '.sass',
      src: `${srcFolder}/templates/styles/#main.sass`,
      dest: `${destFolder}/css/`,
      watch: [
         `${srcFolder}/blocks/**/*.sass`,
         `${srcFolder}/templates/styles/**/*.sass`
      ]
   }
}