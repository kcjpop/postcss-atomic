const { processBlockRule } = require('../generator')

const steppers = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64]
const decls = new Map([
  ['.w-0', { width: '0' }],
  ...steppers.map(i => [`.w-${ i }`, { width: `calc(${ i } * var(--width-scale))` }]),
  ['.w-auto', { width: 'auto' }],
  ['.w-px', { width: '1px' }],
  ['.w-1/2', { width: '50%' }],
  ['.w-1/3', { width: '33.333333%' }],
  ['.w-2/3', { width: '66.666667%' }],
  ['.w-1/4', { width: '25%' }],
  ['.w-2/4', { width: '50%' }],
  ['.w-3/4', { width: '75%' }],
  ['.w-1/5', { width: '20%' }],
  ['.w-2/5', { width: '40%' }],
  ['.w-3/5', { width: '60%' }],
  ['.w-4/5', { width: '80%' }],
  ['.w-1/6', { width: '16.666667%' }],
  ['.w-2/6', { width: '33.333333%' }],
  ['.w-3/6', { width: '50%' }],
  ['.w-4/6', { width: '66.666667%' }],
  ['.w-5/6', { width: '83.333333%' }],
  ['.w-1/12', { width: '8.333333%' }],
  ['.w-2/12', { width: '16.666667%' }],
  ['.w-3/12', { width: '25%' }],
  ['.w-4/12', { width: '33.333333%' }],
  ['.w-5/12', { width: '41.666667%' }],
  ['.w-6/12', { width: '50%' }],
  ['.w-7/12', { width: '58.333333%' }],
  ['.w-8/12', { width: '66.666667%' }],
  ['.w-9/12', { width: '75%' }],
  ['.w-10/12', { width: '83.333333%' }],
  ['.w-11/12', { width: '91.666667%' }],
  ['.w-full', { width: '100%' }],
  ['.w-screen', { width: '100vw' }]
])

module.exports = processBlockRule(decls)
