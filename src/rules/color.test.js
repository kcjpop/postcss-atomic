const { newSheet, run } = require('../testHelpers')

describe('@color', () => {
  it('should generate "color" rules', async () => {
    let src = newSheet`
@color --white-100, --black-100 {
  @text;
}`

    let expected = newSheet`
.text-white-100 { color: var(--white-100); }
.text-black-100 { color: var(--black-100); }`

    await run(src, expected)
  })

  it('should generate "background-color" rules', async () => {
    let src = newSheet`
@color --white-100, --black-100 {
  @bg;
}`

    let expected = newSheet`
.bg-white-100 { background-color: var(--white-100); }
.bg-black-100 { background-color: var(--black-100); }`

    await run(src, expected)
  })

  it('should generate "border-color" rules', async () => {
    let src = newSheet`
@color --white-100, --black-100 {
  @border;
}`

    let expected = newSheet`
.border-white-100 { border-color: var(--white-100); }
.border-black-100 { border-color: var(--black-100); }`

    await run(src, expected)
  })

  it('should generate responsive and pseudo-class variants', async () => {
    let src = newSheet`
@color --white-100, --black-100 {
  @border {
    media: sm;
    first-child: md;
    hover: lg;
    active: xl;
  };
}`

    let expected = newSheet`
.border-white-100 { border-color: var(--white-100); }
.border-black-100 { border-color: var(--black-100); }

@media (--sm) {
  .sm\\:border-white-100 {
    border-color: var(--white-100);
  }
  .sm\\:border-black-100 {
    border-color: var(--black-100);
  }
}

@media (--md) {
  .md\\:first-child\\:border-white-100:first-child {
    border-color: var(--white-100);
  }
  .md\\:first-child\\:border-black-100:first-child {
    border-color: var(--black-100);
  }
}

@media (--lg) {
  .lg\\:hover\\:border-white-100:hover {
    border-color: var(--white-100);
  }
  .lg\\:hover\\:border-black-100:hover {
    border-color: var(--black-100);
  }
}

@media (--xl) {
  .xl\\:active\\:border-white-100:active {
    border-color: var(--white-100);
  }
  .xl\\:active\\:border-black-100:active {
    border-color: var(--black-100);
  }
}`

    await run(src, expected)
  })
})
