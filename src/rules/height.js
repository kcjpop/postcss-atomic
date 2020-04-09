const { processBlockRule } = require('../generator')

const steppers = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64]

const scale = '--height-scale'

const decls = new Map([
  ['.h-0', { height: '0' }],
  ...steppers.map(i => [`.h-${ i }`, { height: `calc(${ i } * var(${ scale }))` }]),
  ['.h-auto', { height: 'auto' }],
  ['.h-px', { height: '1px' }],
  ['.h-full', { height: '100%' }],
  ['.h-screen', { height: '100vh' }]
])

module.exports = processBlockRule(decls)
