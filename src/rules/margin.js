const flatMap = require('lodash.flatmap')

const { processBlockRule } = require('../generator')

// .m{(t|r|b|l|x|y)}-{stepper}

const steppers = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 'px', 'auto']
const negativeSteppers = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 'px']

const m = v => ({ margin: v })
const t = v => ({ 'margin-top': v })
const r = v => ({ 'margin-right': v })
const b = v => ({ 'margin-bottom': v })
const l = v => ({ 'margin-left': v })
const x = v => ({ 'margin-left': v, 'margin-right': v })
const y = v => ({ 'margin-top': v, 'margin-bottom': v })

const base = [
  { suffix: '', fn: m },
  { suffix: 't', fn: t },
  { suffix: 'r', fn: r },
  { suffix: 'b', fn: b },
  { suffix: 'l', fn: l },
  { suffix: 'x', fn: x },
  { suffix: 'y', fn: y }
]

const scale = '--margin-scale'

const decls = new Map([
  // Generate positive rules
  ...flatMap(base, ({ suffix, fn }) => {
    let baseName = `.m${ suffix }`

    return steppers.map(i => {
      let ruleName = `${ baseName }-${ i }`
      if (i === 'auto') return [ruleName, fn('auto')]
      if (i === 'px') return [ruleName, fn('1px')]
      if (i === 0) return [ruleName, fn('0')]

      return [ruleName, fn(`calc(${ i } * var(${ scale }))`)]
    })
  }),
  // And negative rules
  ...flatMap(base, ({ suffix, fn }) => {
    let baseName = `.-m${ suffix }`

    return negativeSteppers.map(i => {
      let ruleName = `${ baseName }-${ i }`
      if (i === 'px') return [ruleName, fn('-1px')]

      return [ruleName, fn(`calc(${ -i } * var(${ scale }))`)]
    })
  })
])

module.exports = processBlockRule(decls)
