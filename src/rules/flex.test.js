
const { newSheet, run } = require('../testHelpers')

describe('@flex', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@flex;`

    let expected = newSheet`
.flex-initial { flex: 0 1 auto; }
.flex-1 { flex: 1 1 0%; }
.flex-auto { flex: 1 1 auto; }
.flex-none { flex: none; }
.flex-grow { flex-grow: 1; }
.flex-grow-0 { flex-grow: 0; }
.flex-shrink { flex-shrink: 1; }
.flex-shrink-0 { flex-shrink: 0; }
.order-first { order: -9999; }
.order-last { order: 9999; }
.order-none { order: 0; }
.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }
.order-4 { order: 4; }
.order-5 { order: 5; }
.order-6 { order: 6; }
.order-7 { order: 7; }
.order-8 { order: 8; }
.order-9 { order: 9; }
.order-10 { order: 10; }
.order-11 { order: 11; }
.order-12 { order: 12; }
.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col { flex-direction: column; }
.flex-col-reverse { flex-direction: column-reverse; }
.flex-wrap { flex-wrap: wrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }
.flex-no-wrap { flex-wrap: nowrap; }
.content-center { align-content: center; }
.content-start { align-content: flex-start; }
.content-end { align-content: flex-end; }
.content-between { align-content: space-between; }
.content-around { align-content: space-around; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }
.self-auto { align-self: auto; }
.self-start { align-self: flex-start; }
.self-end { align-self: flex-end; }
.self-center { align-self: center; }
.self-stretch { align-self: stretch; }
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }`

    await run(src, expected)
  })
})
