const { processBlockRule } = require('../generator')

const steppers = [0, 10, 25, 50, 75, 100]

const decls = new Map([
  ...steppers.map(i => [`.opacity-${ i }`, { opacity: i / 100 }])
])

module.exports = processBlockRule(decls)
