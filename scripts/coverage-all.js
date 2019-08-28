const exec = require("child_process").exec;
const Rx = require("rxjs");
const RxOp = require("rxjs/operators");

const angularjson = require("../angular.json");
const allPrjKeys = Object.keys(angularjson.projects);

const getTestArchitect = prjKey => angularjson.projects[prjKey].architect.test;
const runTarget = allPrjKeys.filter(getTestArchitect).reduce(
  (acc, key) => {
    const builderInfo = getTestArchitect(key).builder.split(":");
    const testFramework = builderInfo[builderInfo.length - 1];
    acc[testFramework].push(key);
    return acc;
  },
  { jest: [], karma: [] }
);

let exitCode = 0;
const execTest = Rx.bindCallback(exec);
const runCoverage = p => execTest(`npx ng t ${p} --code-coverage`);
const printResult = r => {
  if (r[0]) {
    console.error(r[0]);
    exitCode++;
  }

  console.log(r[2] || r[1]);
};
const combLatComplete = () => {
  let msg = "All coverage and test passed.";
  if (exitCode) {
    exitCode = 1;
    msg = "Some coverage or test failed.";
  }
  console.log(msg);
  process.exit(exitCode);
};
const combLatError = console.error;
Rx.combineLatest([
  Rx.of(...runTarget.jest).pipe(
    RxOp.concatMap(runCoverage),
    RxOp.tap(printResult)
  ),
  Rx.of(...runTarget.karma).pipe(
    RxOp.concatMap(runCoverage),
    RxOp.tap(printResult)
  )
]).subscribe({
  complete: combLatComplete,
  error: combLatError
});

