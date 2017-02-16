/* eslint-disable */

// var cssNext = require('postcss-cssnext');
// var importPlugin = require('postcss-import');
var stylelint = require('stylelint');
// var reporter = require('postcss-reporter');

var path = require('path');

module.exports = {
  sourceMap: true,
  plugins: {
    'postcss-import': {
      root: path.resolve(__dirname, 'app'),
      plugins: [ stylelint ]
    },
    'postcss-cssnext': {
      features: {
        customProperties: {
          variables: require('./app/themes/variables')
        }
      }
    },
    'postcss-reporter': {}
  }
};
