const {
  newRule,
  splitAndTrim,
  processResponsiveDeclarations
} = require('../generator')

module.exports = function color (root, rule, mediaQueries) {
  let colors = splitAndTrim(rule.params, /,\s+/g)

  function getSelectorAndPropName (ruleName, colorName) {
    if (ruleName === 'text') return [`text-${ colorName }`, 'color']
    if (ruleName === 'border') {
      return [`border-${ colorName }`, 'border-color']
    }
    if (ruleName === 'bg') {
      return [`bg-${ colorName }`, 'background-color']
    }

    return []
  }

  colors.forEach(value => {
    let colorName = value.substr(2)
    rule.walkAtRules(arule => {
      let [selector, propName] = getSelectorAndPropName(arule.name, colorName)
      if (selector != null && propName != null) {
        let propValue = `var(${ value })`

        root.append(
          newRule(`.${ selector }`, { [propName]: propValue }, arule.source)
        )

        if (arule.nodes && arule.nodes.length > 0) {
          processResponsiveDeclarations(
            mediaQueries,
            arule,
            selector,
            { [propName]: propValue }
          )
        }
      }
    })
  })
}
