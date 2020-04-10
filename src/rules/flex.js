const { default: alignContent } = require('tailwindcss/lib/plugins/alignContent')
const { default: alignItems } = require('tailwindcss/lib/plugins/alignItems')
const { default: alignSelf } = require('tailwindcss/lib/plugins/alignSelf')
const { default: flexDirection } = require('tailwindcss/lib/plugins/flexDirection')
const { default: flexWrap } = require('tailwindcss/lib/plugins/flexWrap')
const { default: justifyContent } = require('tailwindcss/lib/plugins/justifyContent')

const { processBlockRule, extractTailwindDefinition } = require('../generator')

const decls = new Map([
  ['.flex-initial', { flex: '0 1 auto' }],
  ['.flex-1', { flex: '1 1 0%' }],
  ['.flex-auto', { flex: '1 1 auto' }],
  ['.flex-none', { flex: 'none' }],

  ['.flex-grow', { 'flex-grow': '1' }],
  ['.flex-grow-0', { 'flex-grow': '0' }],

  ['.flex-shrink', { 'flex-shrink': '1' }],
  ['.flex-shrink-0', { 'flex-shrink': '0' }],

  ['.order-first', { order: -9999 }],
  ['.order-last', { order: 9999 }],
  ['.order-none', { order: 0 }],

  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    i => [`.order-${ i }`, { order: i }]
  ),

  ...extractTailwindDefinition(
    flexDirection,
    flexWrap,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent
  )
])

module.exports = processBlockRule(decls)
