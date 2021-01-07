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
      dest: `${srcFolder}/templates/json/`
   }
}