const postcss = require('postcss')
const escape = require('css.escape')

function splitAndTrim (s, sep = /\s+/) {
  return s.split(sep).map(i => i.trim())
}

function newBlock (selector, props, source) {
  let rule = postcss.rule({ selector })
  for (let prop in props) {
    rule.append(postcss.decl({ prop, value: props[prop] }))
  }
  // Keep sourcemap
  rule.source = source
  return rule
}

function generateMediaBlocks (
  value,
  mediaQueries,
  selector,
  props,
  source
) {
  let values = splitAndTrim(value)
  mediaQueries.forEach(
    block =>
      (value === 'all' || values.includes(block.prefix)) &&
      block.append(
        newBlock(`.${ block.prefix }\\:${ selector }`, props, source)
      )
  )
}

function processBlockRule (decls) {
  return (root, rule, mediaQueries, result) => {
    // If arule has no specific definition, then print out all rules by default
    // (no responsive variants generated though)
    if (rule.nodes == null) {
      for (let [selector, props] of decls.entries()) {
        root.append(
          newBlock(`.${ escape(selector.substr(1)) }`, props, rule.source)
        )
      }
      return
      // TODO: Should we support `@display md lg;` to generate all rules and
      // specified responsive variants?
    }

    // Otherwise, select only defined rules
    rule.walkRules(arule => {
      let { selector } = arule

      if (decls.has(selector)) {
        let selectorWithoutDot = selector.substr(1)

        root.append(newBlock(
          `.${ escape(selectorWithoutDot) }`,
          decls.get(selector),
          arule.source
        ))

        processResponsiveDeclarations(
          mediaQueries,
          arule,
          selectorWithoutDot,
          decls.get(selector)
        )
      } else {
        arule.warn(result, `No definition for ${ selector }`)
      }
    })
  }
}

function processResponsiveDeclarations (
  mediaQueries,
  rule,
  selectorWithoutDot,
  props
) {
  function getSelector (prop, selector) {
    if (prop === 'media') return escape(selector)
    if (prop === 'hover') return `hover\\:${ escape(selector) }:hover`
    if (prop === 'focus') return `focus\\:${ escape(selector) }:focus`
    return null
  }

  rule.walkDecls(decl => {
    let selector = getSelector(decl.prop, selectorWithoutDot)
    if (selector !== null) {
      generateMediaBlocks(
        decl.value,
        mediaQueries,
        selector,
        props,
        decl.source
      )
    }
  })
}

module.exports = {
  processBlockRule,
  splitAndTrim,
  newBlock,
  processResponsiveDeclarations
}
