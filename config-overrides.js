const {override, addBabelPlugins} = require('customize-cra');

module.exports = override(
  addBabelPlugins('babel-plugin-styled-components', [
    'formatjs',
    {
      idInterpolationPattern: '[sha512:contenthash:base64:6]',
      ast: true,
    },
  ]),
);
