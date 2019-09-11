const baseConfig = require("../../../jest.config");

module.exports = {
  ...baseConfig,
  name: "controls-shell",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/shell/controls-shell",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
