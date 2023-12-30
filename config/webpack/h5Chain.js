const H5FixPlugin = require('@antmjs/plugin-h5-fix');
const commonChain = require('./commonChain');
const UnoCSS = require('unocss/webpack').default;

module.exports = function (chain) {
  chain.plugin('unocss').use(UnoCSS());
  chain.plugin('H5FixPlugin').use(new H5FixPlugin());
  commonChain(chain);
};
