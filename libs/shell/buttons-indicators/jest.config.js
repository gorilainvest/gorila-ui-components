const baseConfig = require("../../../jest.config");

module.exports = {
  ...baseConfig,
  name: "buttons-indicators-shell",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/shell/buttons-indicators-shell",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
