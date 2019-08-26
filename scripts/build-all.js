const ngPackage = require('ng-packagr');
const rimraf = require('rimraf');
const Rx = require('rxjs');
const RxOp = require('rxjs/operators');


const nxjson = require("../nx.json");



const clog = msg => console.log('\x1b[36m%s\x1b[0m', msg);




const COMPILED_LIBS = Object.keys(nxjson.projects)

  .filter(lib => nxjson.projects[lib].tags.find(tag => tag === "exportable"))

  .reduce((acc, lib) => ({ ...acc, [lib]: false }), {});



const DEP_GRAPH = Object.keys(COMPILED_LIBS).reduce((acc, k) => ({
  ...acc,
  [k]: nxjson.projects[k].implicitDependencies
}));




const libs = Object.keys(COMPILED_LIBS);




rimraf('dist', { disableGlob: true }, async err => {
  if (err) {
    return;
  }

  let buildObservable = null;
  const asyncBuild = lib => {
    const midPath = lib.indexOf('ui-') === -1 ? `/${lib}` : `/${lib.replace(/-/, '/')}`;

    return ngPackage
      .ngPackagr()
      .forProject(`libs${midPath}/ng-package.json`)
      .withTsConfig(`libs${midPath}/tsconfig.lib.json`)
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
