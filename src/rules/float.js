const { processBlockRule } = require('../helpers')

module.exports = processBlockRule(
  new Map([
    ['.float-right', { float: 'right' }],
    ['.float-left', { float: 'left' }],
    ['.float-none', { float: 'none' }]
  ])
)
