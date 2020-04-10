
const { newSheet, run } = require('../testHelpers')

describe('@border', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@border;`

    let expected = newSheet`
.border { border-width: 1px; }
.border-0 { border-width: 0; }
.border-2 { border-width: calc(2 * var(--border-width-scale)); }
.border-4 { border-width: calc(4 * var(--border-width-scale)); }
.border-8 { border-width: calc(8 * var(--border-width-scale)); }
.border-t { border-top-width: 1px; }
.border-t-0 { border-top-width: 0; }
.border-t-2 { border-top-width: calc(2 * var(--border-width-scale)); }
.border-t-4 { border-top-width: calc(4 * var(--border-width-scale)); }
.border-t-8 { border-top-width: calc(8 * var(--border-width-scale)); }
.border-r { border-right-width: 1px; }
.border-r-0 { border-right-width: 0; }
.border-r-2 { border-right-width: calc(2 * var(--border-width-scale)); }
.border-r-4 { border-right-width: calc(4 * var(--border-width-scale)); }
.border-r-8 { border-right-width: calc(8 * var(--border-width-scale)); }
.border-b { border-bottom-width: 1px; }
.border-b-0 { border-bottom-width: 0; }
.border-b-2 { border-bottom-width: calc(2 * var(--border-width-scale)); }
.border-b-4 { border-bottom-width: calc(4 * var(--border-width-scale)); }
.border-b-8 { border-bottom-width: calc(8 * var(--border-width-scale)); }
.border-l { border-left-width: 1px; }
.border-l-0 { border-left-width: 0; }
.border-l-2 { border-left-width: calc(2 * var(--border-width-scale)); }
.border-l-4 { border-left-width: calc(4 * var(--border-width-scale)); }
.border-l-8 { border-left-width: calc(8 * var(--border-width-scale)); }
.border-collapse { border-collapse: collapse; }
.border-separate { border-collapse: separate; }
.border-solid { border-style: solid; }
.border-dashed { border-style: dashed; }
.border-dotted { border-style: dotted; }
.border-double { border-style: double; }
.border-none { border-style: none; }`

    await run(src, expected)
  })
})
