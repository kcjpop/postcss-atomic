const { processBlockRule } = require('../helpers')

module.exports = processBlockRule(
  new Map([
    ['.box-border', { 'box-sizing': 'border-box' }],
    ['.box-content', { 'box-sizing': 'content-box' }]
  ])
)
