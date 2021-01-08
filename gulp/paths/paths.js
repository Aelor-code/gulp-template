global.srcFolder = './#src'
global.destFolder = './build'

global.path = {
   pug: {
      src: `${srcFolder}/pages/*.pug`,
      dest: `${destFolder}/`,
      watch: [
         `${srcFolder}/pages/*.pug`,
         `${srcFolder}/blocks/**/*.pug`,
         `${srcFolder}/templates/pug/*.pug`
      ]
   },
   json: {
      name: 'main.json',
      src: `${srcFolder}/blocks/**/*.json`,
      dest: `${srcFolder}/templates/json/`,
      watch: `${srcFolder}/blocks/**/*.json`
   },
   styles: {
      fileName: 'main',
      src: `${srcFolder}/templates/styles/#main.sass`,
      dest: `${destFolder}/css/`,
      watch: [
         `${srcFolder}/blocks/**/*.sass`,
         `${srcFolder}/templates/styles/**/*.sass`
      ]
   },
   scripts: {
      fileName: 'main.js',
      src: `${srcFolder}/blocks/**/*.js`,
      dest: `${destFolder}/js/`,
      watch: `${srcFolder}/blocks/**/*.js`
   }
}