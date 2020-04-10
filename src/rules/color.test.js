const { newSheet, run } = require('../testHelpers')

describe('@color', () => {
  it('should generate nothing if children directives are missing', async () => {
    let src = newSheet`
@color --white-100, --black-100 {};`

    let expected = newSheet``

    await run(src, expected)
  })

  it('should generate nothing if specifying an unsupported directives', async () => {
    let src = newSheet`
@color --white-100, --black-100 {
  @text;

  @nothing;
}`

    let expected = newSheet`
.text-white-100 { color: var(--white-100); }
.text-black-100 { color: var(--black-100); }`

    await run(src, expected)
  })

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

  it('should generate pseudo-element classes', async () => {
    let src = newSheet`
@color --white-100, --black-100 {
  @placeholder { media: xl; };
}
@color --white-200, --black-200 {
  @placeholder;
}`

    let expected = newSheet`
.placeholder-white-100::placeholder {
  color: var(--white-100);
}
.placeholder-black-100::placeholder {
  color: var(--black-100);
}
.placeholder-white-200::placeholder {
  color: var(--white-200);
}
.placeholder-black-200::placeholder {
  color: var(--black-200);
}
@media (--xl) {
  .xl\\:placeholder-white-100::placeholder {
    color: var(--white-100);
  }
  .xl\\:placeholder-black-100::placeholder {
    color: var(--black-100);
  }
}`

    await run(src, expected)
  })
})
