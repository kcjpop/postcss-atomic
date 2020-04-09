
const { newSheet, run } = require('../testHelpers')

describe('@height', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@height;`

    let expected = newSheet`
.h-0 { height: 0; }
.h-1 { height: calc(1 * var(--height-scale)); }
.h-2 { height: calc(2 * var(--height-scale)); }
.h-3 { height: calc(3 * var(--height-scale)); }
.h-4 { height: calc(4 * var(--height-scale)); }
.h-5 { height: calc(5 * var(--height-scale)); }
.h-6 { height: calc(6 * var(--height-scale)); }
.h-8 { height: calc(8 * var(--height-scale)); }
.h-10 { height: calc(10 * var(--height-scale)); }
.h-12 { height: calc(12 * var(--height-scale)); }
.h-16 { height: calc(16 * var(--height-scale)); }
.h-20 { height: calc(20 * var(--height-scale)); }
.h-24 { height: calc(24 * var(--height-scale)); }
.h-32 { height: calc(32 * var(--height-scale)); }
.h-40 { height: calc(40 * var(--height-scale)); }
.h-48 { height: calc(48 * var(--height-scale)); }
.h-56 { height: calc(56 * var(--height-scale)); }
.h-64 { height: calc(64 * var(--height-scale)); }
.h-auto { height: auto; }
.h-px { height: 1px; }
.h-full { height: 100%; }
.h-screen { height: 100vh; }`

    await run(src, expected)
  })
})
