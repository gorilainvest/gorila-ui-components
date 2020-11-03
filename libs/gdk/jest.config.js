module.exports = {
  name: 'gdk',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/gdk',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
