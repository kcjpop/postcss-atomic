const { default: position } = require('tailwindcss/lib/plugins/position')

const { processBlockRule, extractTailwindDefinition } = require('../generator')

module.exports = processBlockRule(
  new Map([
    ...extractTailwindDefinition(position),
    ['.inset-0', { top: '0', right: '0', bottom: '0', left: '0' }],
    ['.inset-auto', { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }],
    ['.inset-y-0', { top: '0', bottom: '0' }],
    ['.inset-x-0', { right: '0', left: '0' }],
    ['.inset-y-auto', { top: 'auto', bottom: 'auto' }],
    ['.inset-x-auto', { left: 'auto', right: 'auto' }],
    ['.top-0', { top: '0' }],
    ['.right-0', { right: '0' }],
    ['.bottom-0', { bottom: '0' }],
    ['.left-0', { left: '0' }],
    ['.top-auto', { top: 'auto' }],
    ['.bottom-auto', { bottom: 'auto' }],
    ['.left-auto', { left: 'auto' }],
    ['.right-auto', { right: 'auto' }]
  ])
)
