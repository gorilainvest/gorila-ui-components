const baseConfig = require('../../../jest.config');

module.exports = {
  ...baseConfig,
  name: 'presentational-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shell/presentational-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
