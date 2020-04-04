const postcss = require('postcss')

const rules = require('./rules')

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
  let directives = new Map(rules)

  return (root, result) => {
    // Collect custom media queries
    let customMediaQueries = getMediaQueries(root)

    // Process atomic blocks
    root.walkAtRules(rule => {
      let fn = directives.get(rule.name)
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
