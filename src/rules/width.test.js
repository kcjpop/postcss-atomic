const { newSheet, run } = require('../testHelpers')

describe('@width', () => {
  it('should generate all width rules', async () => {
    let src = newSheet`@width;`

    let expected = newSheet`
.container { width: 100%; }
.w-0 { width: 0; }
.w-1 { width: calc(1 * var(--step)); }
.w-2 { width: calc(2 * var(--step)); }
.w-3 { width: calc(3 * var(--step)); }
.w-4 { width: calc(4 * var(--step)); }
.w-5 { width: calc(5 * var(--step)); }
.w-6 { width: calc(6 * var(--step)); }
.w-8 { width: calc(8 * var(--step)); }
.w-10 { width: calc(10 * var(--step)); }
.w-12 { width: calc(12 * var(--step)); }
.w-16 { width: calc(16 * var(--step)); }
.w-20 { width: calc(20 * var(--step)); }
.w-24 { width: calc(24 * var(--step)); }
.w-32 { width: calc(32 * var(--step)); }
.w-40 { width: calc(40 * var(--step)); }
.w-48 { width: calc(48 * var(--step)); }
.w-56 { width: calc(56 * var(--step)); }
.w-64 { width: calc(64 * var(--step)); }
.w-auto { width: auto; }
.w-px { width: 1px; }
.w-1\\/2 { width: 50%; }
.w-1\\/3 { width: 33.333333%; }
.w-2\\/3 { width: 66.666667%; }
.w-1\\/4 { width: 25%; }
.w-2\\/4 { width: 50%; }
.w-3\\/4 { width: 75%; }
.w-1\\/5 { width: 20%; }
.w-2\\/5 { width: 40%; }
.w-3\\/5 { width: 60%; }
.w-4\\/5 { width: 80%; }
.w-1\\/6 { width: 16.666667%; }
.w-2\\/6 { width: 33.333333%; }
.w-3\\/6 { width: 50%; }
.w-4\\/6 { width: 66.666667%; }
.w-5\\/6 { width: 83.333333%; }
.w-1\\/12 { width: 8.333333%; }
.w-2\\/12 { width: 16.666667%; }
.w-3\\/12 { width: 25%; }
.w-4\\/12 { width: 33.333333%; }
.w-5\\/12 { width: 41.666667%; }
.w-6\\/12 { width: 50%; }
.w-7\\/12 { width: 58.333333%; }
.w-8\\/12 { width: 66.666667%; }
.w-9\\/12 { width: 75%; }
.w-10\\/12 { width: 83.333333%; }
.w-11\\/12 { width: 91.666667%; }
.w-full { width: 100%; }
.w-screen { width: 100vw; }`

    await run(src, expected)
  })
})
