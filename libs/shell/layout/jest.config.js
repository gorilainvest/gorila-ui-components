const baseConfig = require("../../../jest.config");

module.exports = {
  ...baseConfig,
  name: "layout-shell",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/shell/layout-shell",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
