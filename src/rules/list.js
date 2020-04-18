const { default: listStylePosition } = require('tailwindcss/lib/plugins/listStylePosition')

const { processBlockRule, extractTailwindDefinition } = require('../generator')

const types = ['disc',
  'circle',
  'square',
  'decimal',
  'georgian',
  'trad-chinese-informal',
  'kannada']

module.exports = processBlockRule(
  new Map([
    ...extractTailwindDefinition(listStylePosition),
    ...types.map(type => [`.list-${ type }`, { 'list-style-type': type }])
  ])
)
