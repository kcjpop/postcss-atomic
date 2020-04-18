
const { newSheet, run } = require('../testHelpers')

describe('@list', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@list;`

    let expected = newSheet`
.list-inside {
  list-style-position: inside;
}
.list-outside {
  list-style-position: outside;
}
.list-disc {
  list-style-type: disc;
}
.list-circle {
  list-style-type: circle;
}
.list-square {
  list-style-type: square;
}
.list-decimal {
  list-style-type: decimal;
}
.list-georgian {
  list-style-type: georgian;
}
.list-trad-chinese-informal {
  list-style-type: trad-chinese-informal;
}
.list-kannada {
  list-style-type: kannada;
}`

    await run(src, expected)
  })
})
