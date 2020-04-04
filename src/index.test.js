const { newSheet, compile, run } = require('./testHelpers')

describe('@directives', () => {
  it('should not generate anything if there is no directive', async () => {
    let src = newSheet``
    let expected = newSheet``
    await run(src, expected)
  })

  it('should generate all rules', async () => {
    let src = newSheet`@visibility;`

    let expected = newSheet`
.visible { visibility: visible; }
.invisible { visibility: hidden; }`

    await run(src, expected)
  })

  it('should generate all responsive rules', async () => {
    let src = newSheet`@visibility { media: all };`

    let expected = newSheet`
.visible { visibility: visible; }
.invisible { visibility: hidden; }

@media (--sm) {
  .sm\\:visible { visibility: visible; }
  .sm\\:invisible { visibility: hidden; }
}

@media (--md) {
  .md\\:visible { visibility: visible; }
  .md\\:invisible { visibility: hidden; }
}

@media (--lg) {
  .lg\\:visible { visibility: visible; }
  .lg\\:invisible { visibility: hidden; }
}

@media (--xl) {
  .xl\\:visible { visibility: visible; }
  .xl\\:invisible { visibility: hidden; }
};`

    await run(src, expected)
  })

  it('should generate all pseudo-class variants', async () => {
    let src = newSheet`
@visibility {
  hover: sm md lg;
  focus: md lg xl;
};`

    let expected = newSheet`
.visible { visibility: visible; }
.invisible { visibility: hidden; }

@media (--sm) {
  .sm\\:hover\\:visible:hover { visibility: visible; }
  .sm\\:hover\\:invisible:hover { visibility: hidden; }
}

@media (--md) {
  .md\\:hover\\:visible:hover { visibility: visible; }
  .md\\:hover\\:invisible:hover { visibility: hidden; }

  .md\\:focus\\:visible:focus { visibility: visible; }
  .md\\:focus\\:invisible:focus { visibility: hidden; }
}

@media (--lg) {
  .lg\\:hover\\:visible:hover { visibility: visible; }
  .lg\\:hover\\:invisible:hover { visibility: hidden; }

  .lg\\:focus\\:visible:focus { visibility: visible; }
  .lg\\:focus\\:invisible:focus { visibility: hidden; }
}

@media (--xl) {
  .xl\\:focus\\:visible:focus { visibility: visible; }
  .xl\\:focus\\:invisible:focus { visibility: hidden; }
};`

    await run(src, expected)
  })

  it('should generate support "all" pseudo classes', async () => {
    let src = newSheet`
@visibility {
  .visible {
    active: sm;
    disabled: sm;
    first-child: sm;
    first-of-type: sm;
    focus: sm;
    hover: sm;
  }
};`

    let expected = newSheet`
.visible { visibility: visible; }

@media (--sm) {
  .sm\\:active\\:visible:active { visibility: visible; }
  .sm\\:disabled\\:visible:disabled { visibility: visible; }
  .sm\\:first-child\\:visible:first-child { visibility: visible; }
  .sm\\:first-of-type\\:visible:first-of-type { visibility: visible; }
  .sm\\:focus\\:visible:focus { visibility: visible; }
  .sm\\:hover\\:visible:hover { visibility: visible; }
};`

    await run(src, expected)
  })

  it('should generate only specified rules',
    async () => {
      let src = newSheet`
@display {
  .flex {}
  .block {}
}`
      let expected = newSheet`
.flex { display: flex; }
.block { display: block; }`

      await run(src, expected)
    })

  it('should generate responsive rules when cherry-picking', async () => {
    let src = newSheet`
@display {
  .flex { media: sm md lg xl; }
  .block { media: all; }
  .inline-block { media: sm md; }
}`
    let expected = newSheet`
.flex { display: flex; }
.block { display: block; }
.inline-block { display: inline-block; }

@media (--sm) {
  .sm\\:flex { display: flex; }
  .sm\\:block { display: block; }
  .sm\\:inline-block { display: inline-block; }
}
@media (--md) {
  .md\\:flex { display: flex; }
  .md\\:block { display: block; }
  .md\\:inline-block { display: inline-block; }
}
@media (--lg) {
  .lg\\:flex { display: flex; }
  .lg\\:block { display: block; }
}
@media (--xl) {
  .xl\\:flex { display: flex; }
  .xl\\:block { display: block; }
}`

    await run(src, expected)
  })

  it('should warn if cherry-picking an undefined rules', async () => {
    let src = newSheet`
@display {
  .non-existing-rule {}
}`
    let result = await compile(src)
    expect(
      result.warnings()
        .find(w => w.text.match(/No definition for \.non-existing-rule/))
    ).toBeDefined()
  })

  it.todo('should warn if specifying an unsupported pseudo-class')
})
