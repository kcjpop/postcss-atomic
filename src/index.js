const postcss = require('postcss')

const boxSizing = require('./rules/boxSizing')
const color = require('./rules/color')
const border = require('./rules/border')
const container = require('./rules/container')
const display = require('./rules/display')
const font = require('./rules/font')
const flex = require('./rules/flex')
const float = require('./rules/float')
const height = require('./rules/height')
const letterSpacing = require('./rules/letterSpacing')
const margin = require('./rules/margin')
const objectFit = require('./rules/objectFit')
const padding = require('./rules/padding')
const position = require('./rules/position')
const rounded = require('./rules/rounded')
const text = require('./rules/text')
const width = require('./rules/width')

/**
 * Extract @custom-media definitions within the stylesheet
 */
function getMediaQueries (root) {
  return root.nodes
    .filter(node => node.type === 'atrule' && node.name === 'custom-media')
    .reduce((map, node) => {
      let [, prefix] = node.params.match(/--([\dA-Za-z-]+)/)
      let mediaBlock = postcss.atRule({
        name: 'media',
        params: `(--${ prefix })`
      })
      mediaBlock.prefix = prefix

      map.set(prefix, mediaBlock)
      return map
    }, new Map())
}

module.exports = postcss.plugin('postcss-atomic', () => {
  let AT_RULES = new Map()
  AT_RULES.set('box-sizing', boxSizing)
  AT_RULES.set('border', border)
  AT_RULES.set('color', color)
  AT_RULES.set('container', container)
  AT_RULES.set('margin', margin)
  AT_RULES.set('display', display)
  AT_RULES.set('font', font)
  AT_RULES.set('flex', flex)
  AT_RULES.set('float', float)
  AT_RULES.set('height', height)
  AT_RULES.set('letter-spacing', letterSpacing)
  AT_RULES.set('object-fit', objectFit)
  AT_RULES.set('padding', padding)
  AT_RULES.set('position', position)
  AT_RULES.set('rounded', rounded)
  AT_RULES.set('text', text)
  AT_RULES.set('width', width)

  return (root, result) => {
    // Collect custom media queries
    let customMediaQueries = getMediaQueries(root)

    // Process atomic blocks
    root.walkAtRules(rule => {
      let fn = AT_RULES.get(rule.name)
      if (typeof fn === 'function') {
        fn(root, rule, customMediaQueries, result)
        // We don't want to keep our custom syntaxes in the output CSS file
        rule.remove()
      }
    })

    for (let block of customMediaQueries.values()) {
      // Only print out this breakpoint if it has some definitions
      block.nodes != null && root.append(block)
    }
  }
})
