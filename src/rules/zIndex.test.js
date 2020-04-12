const { newSheet, run } = require('../testHelpers')

describe('@z-index', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@z-index;`

    let expected = newSheet`
.z-0 { z-index: 0; }
.z-10 { z-index: 10; }
.z-20 { z-index: 20; }
.z-30 { z-index: 30; }
.z-40 { z-index: 40; }
.z-50 { z-index: 50; }
.z-auto { z-index: auto; }`

    await run(src, expected)
  })
})
