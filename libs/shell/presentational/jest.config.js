const baseConfig = require("../../../jest.config");

module.exports = {
  ...baseConfig,
  name: "presentational-shell",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/shell/presentational-shell",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
