const { processBlockRule } = require('../helpers')

module.exports = processBlockRule(
  new Map([
    ['.flex-row', { 'flex-direction': 'row' }],
    ['.flex-row-reverse', { 'flex-direction': 'row-reverse' }],
    ['.flex-col', { 'flex-direction': 'column' }],
    ['.flex-col-reverse', { 'flex-direction': 'column-reverse' }],

    ['.flex-initial', { flex: '0 1 auto' }],
    ['.flex-1', { flex: '1 1 0%' }],
    ['.flex-auto', { flex: '1 1 auto' }],
    ['.flex-none', { flex: 'none' }],

    ['.flex-no', { 'flex-wrap': 'nowrap' }],
    ['.flex-wrap', { 'flex-wrap': 'wrap' }],
    ['.flex-wrap', { 'flex-wrap': 'wrap-reverse' }],

    ['.justify-start', { 'justify-content': 'flex-start' }],
    ['.justify-center', { 'justify-content': 'center' }],
    ['.justify-end', { 'justify-content': 'flex-end' }],
    ['.justify-between', { 'justify-content': 'space-between' }],
    ['.justify-around', { 'justify-content': 'space-around' }]

  ])
)
