const shell = require('shelljs');
const watch = require('watch');
const path = require('path');
const fs = require('fs-extra');

const routeRoot = path.resolve(__dirname, './src/router');
const pageRoot = path.resolve(__dirname, './src/views');

watch.watchTree(pageRoot, (file, curr, prev) => {
  if (prev === null || (curr && curr.size === 0)) {
    if (
      Object.values(file)
        .join('')
        .indexOf('.vue') > 0
    ) {
      shell.exec('node ./router-generator.js');
    }
  }
});
fs.watchFile(routeRoot + '/base.ts', function(err, file) {
  shell.exec('node ./route-generator.js');
});
