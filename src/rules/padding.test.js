const { newSheet, run } = require('../testHelpers')

describe('@padding', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@padding;`

    let expected = newSheet`
.p-0 {
  padding: 0;
}
.p-1 {
  padding: calc(1 * var(--padding-scale));
}
.p-2 {
  padding: calc(2 * var(--padding-scale));
}
.p-3 {
  padding: calc(3 * var(--padding-scale));
}
.p-4 {
  padding: calc(4 * var(--padding-scale));
}
.p-5 {
  padding: calc(5 * var(--padding-scale));
}
.p-6 {
  padding: calc(6 * var(--padding-scale));
}
.p-8 {
  padding: calc(8 * var(--padding-scale));
}
.p-10 {
  padding: calc(10 * var(--padding-scale));
}
.p-12 {
  padding: calc(12 * var(--padding-scale));
}
.p-16 {
  padding: calc(16 * var(--padding-scale));
}
.p-20 {
  padding: calc(20 * var(--padding-scale));
}
.p-24 {
  padding: calc(24 * var(--padding-scale));
}
.p-32 {
  padding: calc(32 * var(--padding-scale));
}
.p-40 {
  padding: calc(40 * var(--padding-scale));
}
.p-48 {
  padding: calc(48 * var(--padding-scale));
}
.p-56 {
  padding: calc(56 * var(--padding-scale));
}
.p-64 {
  padding: calc(64 * var(--padding-scale));
}
.p-px {
  padding: 1px;
}
.pt-0 {
  padding-top: 0;
}
.pt-1 {
  padding-top: calc(1 * var(--padding-scale));
}
.pt-2 {
  padding-top: calc(2 * var(--padding-scale));
}
.pt-3 {
  padding-top: calc(3 * var(--padding-scale));
}
.pt-4 {
  padding-top: calc(4 * var(--padding-scale));
}
.pt-5 {
  padding-top: calc(5 * var(--padding-scale));
}
.pt-6 {
  padding-top: calc(6 * var(--padding-scale));
}
.pt-8 {
  padding-top: calc(8 * var(--padding-scale));
}
.pt-10 {
  padding-top: calc(10 * var(--padding-scale));
}
.pt-12 {
  padding-top: calc(12 * var(--padding-scale));
}
.pt-16 {
  padding-top: calc(16 * var(--padding-scale));
}
.pt-20 {
  padding-top: calc(20 * var(--padding-scale));
}
.pt-24 {
  padding-top: calc(24 * var(--padding-scale));
}
.pt-32 {
  padding-top: calc(32 * var(--padding-scale));
}
.pt-40 {
  padding-top: calc(40 * var(--padding-scale));
}
.pt-48 {
  padding-top: calc(48 * var(--padding-scale));
}
.pt-56 {
  padding-top: calc(56 * var(--padding-scale));
}
.pt-64 {
  padding-top: calc(64 * var(--padding-scale));
}
.pt-px {
  padding-top: 1px;
}
.pr-0 {
  padding-right: 0;
}
.pr-1 {
  padding-right: calc(1 * var(--padding-scale));
}
.pr-2 {
  padding-right: calc(2 * var(--padding-scale));
}
.pr-3 {
  padding-right: calc(3 * var(--padding-scale));
}
.pr-4 {
  padding-right: calc(4 * var(--padding-scale));
}
.pr-5 {
  padding-right: calc(5 * var(--padding-scale));
}
.pr-6 {
  padding-right: calc(6 * var(--padding-scale));
}
.pr-8 {
  padding-right: calc(8 * var(--padding-scale));
}
.pr-10 {
  padding-right: calc(10 * var(--padding-scale));
}
.pr-12 {
  padding-right: calc(12 * var(--padding-scale));
}
.pr-16 {
  padding-right: calc(16 * var(--padding-scale));
}
.pr-20 {
  padding-right: calc(20 * var(--padding-scale));
}
.pr-24 {
  padding-right: calc(24 * var(--padding-scale));
}
.pr-32 {
  padding-right: calc(32 * var(--padding-scale));
}
.pr-40 {
  padding-right: calc(40 * var(--padding-scale));
}
.pr-48 {
  padding-right: calc(48 * var(--padding-scale));
}
.pr-56 {
  padding-right: calc(56 * var(--padding-scale));
}
.pr-64 {
  padding-right: calc(64 * var(--padding-scale));
}
.pr-px {
  padding-right: 1px;
}
.pb-0 {
  padding-bottom: 0;
}
.pb-1 {
  padding-bottom: calc(1 * var(--padding-scale));
}
.pb-2 {
  padding-bottom: calc(2 * var(--padding-scale));
}
.pb-3 {
  padding-bottom: calc(3 * var(--padding-scale));
}
.pb-4 {
  padding-bottom: calc(4 * var(--padding-scale));
}
.pb-5 {
  padding-bottom: calc(5 * var(--padding-scale));
}
.pb-6 {
  padding-bottom: calc(6 * var(--padding-scale));
}
.pb-8 {
  padding-bottom: calc(8 * var(--padding-scale));
}
.pb-10 {
  padding-bottom: calc(10 * var(--padding-scale));
}
.pb-12 {
  padding-bottom: calc(12 * var(--padding-scale));
}
.pb-16 {
  padding-bottom: calc(16 * var(--padding-scale));
}
.pb-20 {
  padding-bottom: calc(20 * var(--padding-scale));
}
.pb-24 {
  padding-bottom: calc(24 * var(--padding-scale));
}
.pb-32 {
  padding-bottom: calc(32 * var(--padding-scale));
}
.pb-40 {
  padding-bottom: calc(40 * var(--padding-scale));
}
.pb-48 {
  padding-bottom: calc(48 * var(--padding-scale));
}
.pb-56 {
  padding-bottom: calc(56 * var(--padding-scale));
}
.pb-64 {
  padding-bottom: calc(64 * var(--padding-scale));
}
.pb-px {
  padding-bottom: 1px;
}
.pl-0 {
  padding-left: 0;
}
.pl-1 {
  padding-left: calc(1 * var(--padding-scale));
}
.pl-2 {
  padding-left: calc(2 * var(--padding-scale));
}
.pl-3 {
  padding-left: calc(3 * var(--padding-scale));
}
.pl-4 {
  padding-left: calc(4 * var(--padding-scale));
}
.pl-5 {
  padding-left: calc(5 * var(--padding-scale));
}
.pl-6 {
  padding-left: calc(6 * var(--padding-scale));
}
.pl-8 {
  padding-left: calc(8 * var(--padding-scale));
}
.pl-10 {
  padding-left: calc(10 * var(--padding-scale));
}
.pl-12 {
  padding-left: calc(12 * var(--padding-scale));
}
.pl-16 {
  padding-left: calc(16 * var(--padding-scale));
}
.pl-20 {
  padding-left: calc(20 * var(--padding-scale));
}
.pl-24 {
  padding-left: calc(24 * var(--padding-scale));
}
.pl-32 {
  padding-left: calc(32 * var(--padding-scale));
}
.pl-40 {
  padding-left: calc(40 * var(--padding-scale));
}
.pl-48 {
  padding-left: calc(48 * var(--padding-scale));
}
.pl-56 {
  padding-left: calc(56 * var(--padding-scale));
}
.pl-64 {
  padding-left: calc(64 * var(--padding-scale));
}
.pl-px {
  padding-left: 1px;
}
.px-0 {
  padding-left: 0;
  padding-right: 0;
}
.px-1 {
  padding-left: calc(1 * var(--padding-scale));
  padding-right: calc(1 * var(--padding-scale));
}
.px-2 {
  padding-left: calc(2 * var(--padding-scale));
  padding-right: calc(2 * var(--padding-scale));
}
.px-3 {
  padding-left: calc(3 * var(--padding-scale));
  padding-right: calc(3 * var(--padding-scale));
}
.px-4 {
  padding-left: calc(4 * var(--padding-scale));
  padding-right: calc(4 * var(--padding-scale));
}
.px-5 {
  padding-left: calc(5 * var(--padding-scale));
  padding-right: calc(5 * var(--padding-scale));
}
.px-6 {
  padding-left: calc(6 * var(--padding-scale));
  padding-right: calc(6 * var(--padding-scale));
}
.px-8 {
  padding-left: calc(8 * var(--padding-scale));
  padding-right: calc(8 * var(--padding-scale));
}
.px-10 {
  padding-left: calc(10 * var(--padding-scale));
  padding-right: calc(10 * var(--padding-scale));
}
.px-12 {
  padding-left: calc(12 * var(--padding-scale));
  padding-right: calc(12 * var(--padding-scale));
}
.px-16 {
  padding-left: calc(16 * var(--padding-scale));
  padding-right: calc(16 * var(--padding-scale));
}
.px-20 {
  padding-left: calc(20 * var(--padding-scale));
  padding-right: calc(20 * var(--padding-scale));
}
.px-24 {
  padding-left: calc(24 * var(--padding-scale));
  padding-right: calc(24 * var(--padding-scale));
}
.px-32 {
  padding-left: calc(32 * var(--padding-scale));
  padding-right: calc(32 * var(--padding-scale));
}
.px-40 {
  padding-left: calc(40 * var(--padding-scale));
  padding-right: calc(40 * var(--padding-scale));
}
.px-48 {
  padding-left: calc(48 * var(--padding-scale));
  padding-right: calc(48 * var(--padding-scale));
}
.px-56 {
  padding-left: calc(56 * var(--padding-scale));
  padding-right: calc(56 * var(--padding-scale));
}
.px-64 {
  padding-left: calc(64 * var(--padding-scale));
  padding-right: calc(64 * var(--padding-scale));
}
.px-px {
  padding-left: 1px;
  padding-right: 1px;
}
.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}
.py-1 {
  padding-top: calc(1 * var(--padding-scale));
  padding-bottom: calc(1 * var(--padding-scale));
}
.py-2 {
  padding-top: calc(2 * var(--padding-scale));
  padding-bottom: calc(2 * var(--padding-scale));
}
.py-3 {
  padding-top: calc(3 * var(--padding-scale));
  padding-bottom: calc(3 * var(--padding-scale));
}
.py-4 {
  padding-top: calc(4 * var(--padding-scale));
  padding-bottom: calc(4 * var(--padding-scale));
}
.py-5 {
  padding-top: calc(5 * var(--padding-scale));
  padding-bottom: calc(5 * var(--padding-scale));
}
.py-6 {
  padding-top: calc(6 * var(--padding-scale));
  padding-bottom: calc(6 * var(--padding-scale));
}
.py-8 {
  padding-top: calc(8 * var(--padding-scale));
  padding-bottom: calc(8 * var(--padding-scale));
}
.py-10 {
  padding-top: calc(10 * var(--padding-scale));
  padding-bottom: calc(10 * var(--padding-scale));
}
.py-12 {
  padding-top: calc(12 * var(--padding-scale));
  padding-bottom: calc(12 * var(--padding-scale));
}
.py-16 {
  padding-top: calc(16 * var(--padding-scale));
  padding-bottom: calc(16 * var(--padding-scale));
}
.py-20 {
  padding-top: calc(20 * var(--padding-scale));
  padding-bottom: calc(20 * var(--padding-scale));
}
.py-24 {
  padding-top: calc(24 * var(--padding-scale));
  padding-bottom: calc(24 * var(--padding-scale));
}
.py-32 {
  padding-top: calc(32 * var(--padding-scale));
  padding-bottom: calc(32 * var(--padding-scale));
}
.py-40 {
  padding-top: calc(40 * var(--padding-scale));
  padding-bottom: calc(40 * var(--padding-scale));
}
.py-48 {
  padding-top: calc(48 * var(--padding-scale));
  padding-bottom: calc(48 * var(--padding-scale));
}
.py-56 {
  padding-top: calc(56 * var(--padding-scale));
  padding-bottom: calc(56 * var(--padding-scale));
}
.py-64 {
  padding-top: calc(64 * var(--padding-scale));
  padding-bottom: calc(64 * var(--padding-scale));
}
.py-px {
  padding-top: 1px;
  padding-bottom: 1px;
}`

    await run(src, expected)
  })
})
