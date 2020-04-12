
const { newSheet, run } = require('../testHelpers')

describe('@leading', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@leading;`

    let expected = newSheet`
.leading-none {
  line-height: 1;
}
.leading-tight {
  line-height: 1.25;
}
.leading-snug {
  line-height: 1.375;
}
.leading-normal {
  line-height: 1.5;
}
.leading-relaxed {
  line-height: 1.625;
}
.leading-loose {
  line-height: 2;
}
.leading-3 {
  line-height: .75rem;
}
.leading-4 {
  line-height: 1rem;
}
.leading-5 {
  line-height: 1.25rem;
}
.leading-6 {
  line-height: 1.5rem;
}
.leading-7 {
  line-height: 1.75rem;
}
.leading-8 {
  line-height: 2rem;
}
.leading-9 {
  line-height: 2.25rem;
}
.leading-10 {
  line-height: 2.5rem;
}`

    await run(src, expected)
  })
})
