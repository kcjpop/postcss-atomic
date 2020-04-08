const flatMap = require('lodash.flatmap')

const { processBlockRule } = require('../generator')

const steppers = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 'px']

// .p{(t|r|b|l|x|y)}-{stepper}

const p = v => ({ padding: v })
const t = v => ({ 'padding-top': v })
const r = v => ({ 'padding-right': v })
const b = v => ({ 'padding-bottom': v })
const l = v => ({ 'padding-left': v })
const x = v => ({ 'padding-left': v, 'padding-right': v })
const y = v => ({ 'padding-top': v, 'padding-bottom': v })

const base = [
  { suffix: '', fn: p },
  { suffix: 't', fn: t },
  { suffix: 'r', fn: r },
  { suffix: 'b', fn: b },
  { suffix: 'l', fn: l },
  { suffix: 'x', fn: x },
  { suffix: 'y', fn: y }
]

const scale = '--padding-scale'

module.exports = processBlockRule(
  new Map([
    ...flatMap(base, ({ suffix, fn }) => {
      let baseName = `.p${ suffix }`

      return steppers.map(i => {
        let ruleName = `${ baseName }-${ i }`
        if (i === 'px') return [ruleName, fn('1px')]
        if (i === 0) return [ruleName, fn('0')]

        return [ruleName, fn(`calc(${ i } * var(${ scale }))`)]
      })
    })
  ])
)
