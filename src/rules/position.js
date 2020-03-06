const { processBlockRule } = require('../helpers')

module.exports = processBlockRule(
  new Map([
    ['.static', { position: 'static' }],
    ['.fixed', { position: 'fixed' }],
    ['.absolute', { position: 'absolute' }],
    ['.relative', { position: 'relative' }],
    ['.sticky', { position: 'sticky' }],

    ['.top-0', { top: '0' }],
    ['.right-0', { right: '0' }],
    ['.bottom-0', { bottom: '0' }],
    ['.left-0', { left: '0' }]
  ])
)
