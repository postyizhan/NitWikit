const fixAlignItems = require('./postcss-plugins/fix-align-items');

module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    fixAlignItems(),
    require('autoprefixer'),
  ],
}; 