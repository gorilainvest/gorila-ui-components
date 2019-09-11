module.exports = {
  name: "shell-controls-shell",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/shell/controls-shell",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
