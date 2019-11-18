const replace = require('replace');

replace({
  regex: /\.(\/guides)*\/(.+)\.md/,
  replacement: './additional-documentation/$2.html',
  paths: ['./README.md', './README.md', './guides/contributing.md'],
  recursive: true
});
