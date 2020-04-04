const { newSheet, run } = require('../testHelpers')

describe('@container', () => {
  it('should generate .container for all breakpoints by default', async () => {
    let src = newSheet`@container;`

    let expected = newSheet`
.container { width: 100%; }
@media (--sm) { .container { max-width: 640px; } }
@media (--md) { .container { max-width: 768px; } }
@media (--lg) { .container { max-width: 1024px; } }
@media (--xl) { .container { max-width: 1280px; } }`

    await run(src, expected)
  })

  it('should selectively generate .container for some specific breakpoints',
    async () => {
      let src = newSheet`
@container md xl;`

      let expected = newSheet`
.container { width: 100%; }
@media (--md) { .container { max-width: 768px; } }
@media (--xl) { .container { max-width: 1280px; } }`

      await run(src, expected)
    })
})
