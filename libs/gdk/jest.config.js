module.exports = {
  name: "gdk",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/gdk",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
