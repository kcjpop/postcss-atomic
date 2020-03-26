const { processBlockRule } = require('../helpers')

module.exports = processBlockRule(
  new Map([
    ['.tracking-tighter', { 'letter-spacing': '-0.05em' }],
    ['.tracking-tight', { 'letter-spacing': '-0.025em' }],
    ['.tracking-normal', { 'letter-spacing': '0' }],
    ['.tracking-wide', { 'letter-spacing': '0.025em' }],
    ['.tracking-wider', { 'letter-spacing': '0.05em' }],
    ['.tracking-widest', { 'letter-spacing': '0.1em' }]
  ])
)
