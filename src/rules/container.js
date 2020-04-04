const { splitAndTrim, newRule } = require('../generator')

const SELECTOR = '.container'
const DEFAULT_CONTAINER_RULES = new Map([
  ['sm', { 'max-width': '640px' }],
  ['md', { 'max-width': '768px' }],
  ['lg', { 'max-width': '1024px' }],
  ['xl', { 'max-width': '1280px' }]
])

module.exports = function container (root, rule, mediaQueries) {
  root.append(newRule(SELECTOR, { width: '100%' }, rule.source))
  let queries = rule.params.length !== 0 ? splitAndTrim(rule.params) : null

  mediaQueries.forEach(block => {
    if (queries === null || queries.includes(block.prefix)) {
      block.append(
        newRule(
          SELECTOR, DEFAULT_CONTAINER_RULES.get(block.prefix), rule.source
        )
      )
    }
  })
}
