const ng = require('@angular/cli');
const rimraf = require('rimraf');
const angularjson = require('../angular.json');

rimraf('dist', { disableGlob: true }, err => {
  if (err) {
    return;
  }

  Object.keys(angularjson.projects)
    .filter(proj => proj.startsWith('ui-'))
    .forEach(async lib => {
      await ng.default({ cliArgs: ['build', lib] });
    });
});

