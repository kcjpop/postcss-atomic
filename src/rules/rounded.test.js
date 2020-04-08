const { newSheet, run } = require('../testHelpers')

describe('@rounded', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@rounded;`

    let expected = newSheet`
.rounded-none {
  border-radius: 0;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-t-none {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.rounded-r-none {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.rounded-b-none {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.rounded-l-none {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.rounded-tl-none {
  border-top-left-radius: 0;
}
.rounded-tr-none {
  border-top-right-radius: 0;
}
.rounded-bl-none {
  border-bottom-right-radius: 0;
}
.rounded-br-none {
  border-bottom-left-radius: 0;
}
.rounded-t-sm {
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
}
.rounded-r-sm {
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
}
.rounded-b-sm {
  border-bottom-right-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}
.rounded-l-sm {
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}
.rounded-tl-sm {
  border-top-left-radius: 0.125rem;
}
.rounded-tr-sm {
  border-top-right-radius: 0.125rem;
}
.rounded-bl-sm {
  border-bottom-right-radius: 0.125rem;
}
.rounded-br-sm {
  border-bottom-left-radius: 0.125rem;
}
.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.rounded-tl {
  border-top-left-radius: 0.25rem;
}
.rounded-tr {
  border-top-right-radius: 0.25rem;
}
.rounded-bl {
  border-bottom-right-radius: 0.25rem;
}
.rounded-br {
  border-bottom-left-radius: 0.25rem;
}
.rounded-t-md {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}
.rounded-r-md {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}
.rounded-b-md {
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.rounded-tl-md {
  border-top-left-radius: 0.375rem;
}
.rounded-tr-md {
  border-top-right-radius: 0.375rem;
}
.rounded-bl-md {
  border-bottom-right-radius: 0.375rem;
}
.rounded-br-md {
  border-bottom-left-radius: 0.375rem;
}
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.rounded-tl-lg {
  border-top-left-radius: 0.5rem;
}
.rounded-tr-lg {
  border-top-right-radius: 0.5rem;
}
.rounded-bl-lg {
  border-bottom-right-radius: 0.5rem;
}
.rounded-br-lg {
  border-bottom-left-radius: 0.5rem;
}
.rounded-t-full {
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
}
.rounded-r-full {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}
.rounded-b-full {
  border-bottom-right-radius: 9999px;
  border-bottom-left-radius: 9999px;
}
.rounded-l-full {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}
.rounded-tl-full {
  border-top-left-radius: 9999px;
}
.rounded-tr-full {
  border-top-right-radius: 9999px;
}
.rounded-bl-full {
  border-bottom-right-radius: 9999px;
}
.rounded-br-full {
  border-bottom-left-radius: 9999px;
}`

    await run(src, expected)
  })
})
