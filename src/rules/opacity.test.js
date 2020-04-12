
const { newSheet, run } = require('../testHelpers')

describe('@opacity', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@opacity;`

    let expected = newSheet`
.opacity-0 {
  opacity: 0;
}
.opacity-10 {
  opacity: 0.1;
}
.opacity-25 {
  opacity: 0.25;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-75 {
  opacity: 0.75;
}
.opacity-100 {
  opacity: 1;
}`

    await run(src, expected)
  })
})
