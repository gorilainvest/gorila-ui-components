const ngPackage = require('ng-packagr');
const rimraf = require('rimraf');
const Rx = require('rxjs');
const RxOp = require('rxjs/operators');
const ngjson = require("../angular.json");
const nxdepsjson = require("../dist/nxdeps.json");
const nxjson = require("../nx.json");

const clog = msg => console.log('\x1b[36m%s\x1b[0m', msg);

const COMPILED_LIBS = Object.keys(nxjson.projects)
  .filter(lib => ngjson.projects[lib].projectType === 'library' && !!ngjson.projects[lib].architect.build)
  .reduce((acc, lib) => ({ ...acc, [lib]: false }), {});

const getDeps = proj =>
  nxdepsjson.dependencies[proj]
    .map(dep => dep.projectName)
    .filter(dep => COMPILED_LIBS[dep] === false);

const DEP_GRAPH = Object.keys(COMPILED_LIBS).reduce((acc, k) => ({
  ...acc,
  [k]: getDeps(k)
}));

const libs = Object.keys(COMPILED_LIBS);

rimraf('dist', { disableGlob: true }, async err => {
  if (err) {
    return;
  }

  let buildObservable = null;
  const asyncBuild = lib => {
    const buildOptions = ngjson.projects[lib].architect.build.options;

    return ngPackage
      .ngPackagr()
      .forProject(buildOptions.project)
      .withTsConfig(buildOptions.tsConfig)
      .buildAsObservable()
      .pipe(
        RxOp.catchError(error => {
          console.error(error);
          process.exit(1);
        })
      );
  };

  await Rx.timer(0, 0).pipe(
    RxOp.filter(() => buildObservable === null),
    RxOp.takeWhile(() => libs.length)
  ).subscribe(() => {
    const lib = libs.shift();
    clog(`Checking if ${lib} can be build...`);

    if (COMPILED_LIBS[lib]) {
      clog(`${lib} was compiled previously, discarding it`);
      return;
    }

    const missingDeps = (DEP_GRAPH[lib] || [])
      .filter(dep => !COMPILED_LIBS[dep]);
    if (missingDeps.length > 0) {
      clog(`Some deps is not built yet for ${lib}: ${missingDeps}`);
      libs.push(lib);
      return;
    }

    clog(`Library ${lib} is ready to build`);
    (buildObservable = asyncBuild(lib)).subscribe(() => {
      COMPILED_LIBS[lib] = true;
      buildObservable = null;
    });
  });
});
