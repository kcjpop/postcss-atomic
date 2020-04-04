const postcss = require('postcss')
const escape = require('css.escape')

function splitAndTrim (s, sep = /\s+/) {
  return s.split(sep).map(i => i.trim())
}

function getSelectorForPseudoClass (prop, selectorWithoutDot) {
  if (prop === 'media') return escape(selectorWithoutDot)
  if (prop === 'hover') return `hover\\:${ escape(selectorWithoutDot) }:hover`
  if (prop === 'focus') return `focus\\:${ escape(selectorWithoutDot) }:focus`
  return null
}

/**
 * Helper to make a new CSS rule
 *
 * @param {string} selector Selector name, with dot
 * @param {object} props CSS properties of this rule
 * @param {object} source Source node to generate this rule
 */
function newRule (selector, props, source) {
  let rule = postcss.rule({ selector })
  rule.source = source

  for (let prop in props) {
    rule.append(postcss.decl({ prop, value: props[prop] }))
  }

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
        newRule(`.${ block.prefix }\\:${ selector }`, props, source)
      )
  )
}

function appendRootAllClasses (root, node, directiveRules) {
  for (let [selector, props] of directiveRules.entries()) {
    root.append(
      newRule(`.${ escape(selector.substr(1)) }`, props, node.source)
    )
  }
}

function processBlockRule (decls) {
  return (root, rule, mediaQueries, result) => {
    // If arule has no specific definition, then print out all rules by default
    // (no responsive variants generated though)
    if (rule.nodes == null) {
      appendRootAllClasses(root, rule, decls)
      return
    }

    // Check if this block contains rules => cherry picking classes is desired
    let isCherryPicking = rule.some(i => i.type === 'rule')

    // If users want to generate all pseudo-class variants of this block
    if (!isCherryPicking) {
      // Generate all definition of this block to root
      appendRootAllClasses(root, rule, decls)

      // Generate responsive classes
      rule.walkDecls(decl => {
        // To avoid this case @float { .float-right { media: all; } }
        if (decl.parent !== rule) return

        for (let [selector, props] of decls.entries()) {
          let selectorWithoutDot = selector.substr(1)

          generateMediaBlocks(
            decl.value,
            mediaQueries,
            getSelectorForPseudoClass(decl.prop, selectorWithoutDot),
            props,
            decl.source
          )
        }
      })
    }

    // Otherwise, select only defined rules
    rule.walkRules(arule => {
      let { selector } = arule

      if (decls.has(selector)) {
        let selectorWithoutDot = selector.substr(1)

        root.append(newRule(
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
  rule.walkDecls(decl => {
    let selector = getSelectorForPseudoClass(decl.prop, selectorWithoutDot)
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

/**
 * Take a Tailwind plugin and extract its CSS definitions. Only work with static
 * plugins.
 *
 * @param  {...any} plugins Spreads of Tailwind plugins
 */
function extractTailwindDefinition (...plugins) {
  let allDefs = plugins.flatMap(plugin => {
    let defs = null
    plugin()({ addUtilities: ds => (defs = ds), variants: () => {} })

    return Object.entries(defs)
  })

  return processBlockRule(new Map(allDefs))
}

module.exports = {
  newRule,
  splitAndTrim,
  processBlockRule,
  extractTailwindDefinition,
  processResponsiveDeclarations
}