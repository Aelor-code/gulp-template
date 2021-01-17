global.srcFolder = './#src'
global.destFolder = './build'

global.path = {
   ftp: {
      siteName: folderName,
      site: 'http://aelor-code.ru/view',
      src: `${destFolder}/**/*.*`,
      host: '',
      user: '',
      pass: '',
      folder: `${destFolder}`
   },
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
      src: `${srcFolder}/templates/styles/_#main.styl`,
      dest: `${destFolder}/css/`,
      watch: [
         `${srcFolder}/blocks/**/*.styl`,
         `${srcFolder}/templates/styles/**/*.styl`
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
         src: [
           `${srcFolder}/plugins/jquery/jquery.js`,
           `${srcFolder}/plugins/**/*.js`
         ],
         dest: `${destFolder}/js/`,
         watch: `${srcFolder}/plugins/**/*.js`
      }
   },
   fonts: {
      src: `${srcFolder}/fonts/*.{woff,woff2}`,
      dest: `${destFolder}/fonts/`,
      watch: `${srcFolder}/fonts/*.{woff,woff2}`,
      styles: {
         fileStyle: `${srcFolder}/templates/styles/_fonts.styl`,
         files: `${srcFolder}/fonts/`
      }
   },
   images: {
      src: `${srcFolder}/images/*.{jpg,jpeg,png,ico,gif,svg,webp}`,
      dest: `${destFolder}/images/`,
      watch: `${srcFolder}/images/*.{jpg,jpeg,png,ico,gif,svg,webp}`
   },
   iconFonts: {
      dir: `${srcFolder}/images/iconFonts/`,
      src: `${srcFolder}/images/iconFonts/*.svg`,
      dest: `${srcFolder}/fonts/`,
      watch: `${srcFolder}/images/iconFonts/*.svg`,
      runTimestamp: Math.round(Date.now() / 1000),
      targetPath: `../templates/styles/_iconFont.styl`,
      fontPath: `${srcFolder}/fonts/`,
      pathTemplate: `${srcFolder}/templates/styles/_templateIconFont.styl`,
      fontName: "iconFont"
   }
}
