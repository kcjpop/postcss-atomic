const flatMap = require('lodash.flatmap')
const { default: borderCollapse } = require('tailwindcss/lib/plugins/borderCollapse')
const { default: borderStyle } = require('tailwindcss/lib/plugins/borderStyle')

const { processBlockRule, extractTailwindDefinition } = require('../generator')

// .border{-(t|r|b|l)}{-stepper}

const steppers = [0, 2, 4, 8]

const base = [
  ['', v => ({ 'border-width': v })],
  ['-t', v => ({ 'border-top-width': v })],
  ['-r', v => ({ 'border-right-width': v })],
  ['-b', v => ({ 'border-bottom-width': v })],
  ['-l', v => ({ 'border-left-width': v })]
]

const scale = '--border-width-scale'

const decls = new Map([
  ...flatMap(base, ([suffix, fn]) => {
    return [
      [`.border${ suffix }`, fn('1px')],
      ...steppers.map(i => [
        `.border${ suffix }-${ i }`,
        fn(i === 0 ? '0' : `calc(${ i } * var(${ scale }))`)
      ])
    ]
  }),
  // border-collapse
  // border-style
  ...extractTailwindDefinition(borderCollapse, borderStyle)
])

module.exports = processBlockRule(decls)
