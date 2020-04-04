const { processBlockRule } = require('../generator')

module.exports = processBlockRule(
  new Map([
    ['.rounded-none', { 'border-radius': '0' }],
    ['.rounded-sm', { 'border-radius': '0.125rem' }],
    ['.rounded', { 'border-radius': '0.25rem' }],
    ['.rounded-md', { 'border-radius': '0.375rem' }],
    ['.rounded-lg', { 'border-radius': '0.5rem' }],
    ['.rounded-full', { 'border-radius': '9999px' }]
  ])
)
