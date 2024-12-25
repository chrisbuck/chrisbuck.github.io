const path = require('path');
const { override, addWebpackAlias, useBabelRc } = require('customize-cra');

module.exports = override(
  // Add webpack aliases
  addWebpackAlias({
    ['@components']: path.resolve(__dirname, 'src/components'),
    ['@styles']: path.resolve(__dirname, 'src/styles'),
  }),

  // Use your .babelrc file
//   useBabelRc()
);
