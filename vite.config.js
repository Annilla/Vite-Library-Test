const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'anny-lib',
      fileName: (format) => `anny-lib.${format}.js`
    }
  }
});