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
   },
   plugins: {
      styles: {
         fileName: 'libs.css',
         src: `${srcFolder}/plugins/**/*.css`,
         dest: `${destFolder}/css/`,
         watch: `${srcFolder}/plugins/**/*.css`
      },
      scripts: {
         fileName: 'libs.js',
         src: `${srcFolder}/plugins/**/*.js`,
         dest: `${destFolder}/js/`,
         watch: `${srcFolder}/plugins/**/*.js`
      }
   },
   fonts: {
      src: `${srcFolder}/fonts/*.{woff,woff2}`,
      dest: `${destFolder}/fonts/`,
      watch: `${srcFolder}/fonts/*.{woff,woff2}`,
      styles: {
         fileStyle: `${srcFolder}/templates/styles/fonts.sass`,
         files: `${srcFolder}/fonts/`
      }
   },
   images: {
      src: `${srcFolder}/images/*.{jpg,jpeg,png,ico,gif,svg,webp}`,
      dest: `${destFolder}/images/`,
      watch: `${srcFolder}/images/*.{jpg,jpeg,png,ico,gif,svg,webp}`
   }
}