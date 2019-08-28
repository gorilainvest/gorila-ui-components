const baseConfig = require("../../../jest.config");

module.exports = {
  ...baseConfig,
  name: "popups-modals-shell",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/shell/popups-modals-shell",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
