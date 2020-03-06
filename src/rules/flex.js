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

    ['.items-stretch', { 'align-items': 'stretch' }],
    ['.items-start', { 'align-items': 'flex-start' }],
    ['.items-center', { 'align-items': 'center' }],
    ['.items-end', { 'align-items': 'flex-end' }],
    ['.items-baseline', { 'align-items': 'baseline' }],

    ['.content-start', { 'align-content': 'flex-start' }],
    ['.content-center', { 'align-content': 'center' }],
    ['.content-end', { 'align-content': 'flex-end' }],
    ['.content-between', { 'align-content': 'space-between' }],
    ['.content-around', { 'align-content': 'space-around' }],

    ['.justify-start', { 'justify-content': 'flex-start' }],
    ['.justify-center', { 'justify-content': 'center' }],
    ['.justify-end', { 'justify-content': 'flex-end' }],
    ['.justify-between', { 'justify-content': 'space-between' }],
    ['.justify-around', { 'justify-content': 'space-around' }],

    ['.self-auto', { 'align-self': 'auto' }],
    ['.self-start', { 'align-self': 'flex-start' }],
    ['.self-center', { 'align-self': 'center' }],
    ['.self-end', { 'align-self': 'flex-end' }],
    ['.self-stretch', { 'align-self': 'stretch' }]
  ])
)
