const flatMap = require('lodash.flatmap')

const { processBlockRule } = require('../generator')

// .rounded{-(t|r|b|l|tl|tr|bl|br)}-none
// .rounded{-(t|r|b|l|tl|tr|bl|br)}-sm
// .rounded{-(t|r|b|l|tl|tr|bl|br)}
// .rounded{-(t|r|b|l|tl|tr|bl|br)}-md
// .rounded{-(t|r|b|l|tl|tr|bl|br)}-lg
// .rounded{-(t|r|b|l|tl|tr|bl|br)}-full

const variants = [
  ['-t', value => ({ 'border-top-left-radius': value, 'border-top-right-radius': value })],
  ['-r', value => ({ 'border-top-right-radius': value, 'border-bottom-right-radius': value })],
  ['-b', value => ({ 'border-bottom-right-radius': value, 'border-bottom-left-radius': value })],
  ['-l', value => ({ 'border-top-left-radius': value, 'border-bottom-left-radius': value })],
  ['-tl', value => ({ 'border-top-left-radius': value })],
  ['-tr', value => ({ 'border-top-right-radius': value })],
  ['-bl', value => ({ 'border-bottom-right-radius': value })],
  ['-br', value => ({ 'border-bottom-left-radius': value })]
]

const base = [
  { suffix: '-none', value: '0' },
  { suffix: '-sm', value: '0.125rem' },
  { suffix: '', value: '0.25rem' },
  { suffix: '-md', value: '0.375rem' },
  { suffix: '-lg', value: '0.5rem' },
  { suffix: '-full', value: '9999px' }
]

module.exports = processBlockRule(
  new Map([
    ...base.map(o => [`.rounded${ o.suffix }`, { 'border-radius': o.value }]),
    ...flatMap(base, o =>
      variants.map(([prefix, fn]) => [
        `.rounded${ prefix }${ o.suffix }`, fn(o.value)
      ])
    )
  ])
)
