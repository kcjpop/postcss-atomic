const postCssAtomic = require('./src')

module.exports = {
  map: { inline: false },
  plugins: [postCssAtomic()]
}
