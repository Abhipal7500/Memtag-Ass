// postcss.config.cjs
const tailwindPlugin = require('@tailwindcss/postcss')

module.exports = {
  plugins: [
    tailwindPlugin,
    require('autoprefixer'),
  ],
}
