const postcss = require('postcss')

const plugin = require('./')

async function compile (input) {
  return postcss([plugin()]).process(input, { from: undefined })
}

async function run (input, output, { debug = false } = {}) {
  let result = await compile(input)

  if (debug) expect(result.css.trim()).toEqual(output.trim())
  else {
    expect(result.css.replace(/\s+/g, ' ').trim()).toEqual(
      output.replace(/\s+/g, ' ').trim()
    )
  }

  expect(result.warnings()).toHaveLength(0)
}

function newSheet (content) {
  return `:root {
  --white-100: #eff0f3;
  --white-200: #fffffe;
  --black-100: #0d0d0d;
  --black-200: #2a2a2a;
}

@custom-media --sm (min-width: '640px');
@custom-media --md (min-width: '768px');
@custom-media --lg (min-width: '1024px');
@custom-media --xl (min-width: '1280px');
${ content }`
}

describe('@directives', () => {
  it('should not generate anything if there is no directive', async () => {
    let src = newSheet``
    let expected = newSheet``
    await run(src, expected)
  })

  it('should generate default rules if a directive has no params', async () => {
    let src = newSheet`
@float;`

    let expected = newSheet`
.float-right { float: right; }
.float-left { float: left; }
.float-none { float: none; }`

    await run(src, expected)
  })

  it('should generate only specified rules without any responsive variants',
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

  it('should show warning if cherry-picking an undefined rules', async () => {
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

  it('should generate "media" variants for rules', async () => {
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

  it.todo('should generate "focus" variants for rules')
  it.todo('should generate "hover" variants for rules')
})

describe('@container', () => {
  it('should generate .container for all breakpoints by default', async () => {
    let src = newSheet`@container;`

    let expected = newSheet`
.container { width: 100%; }
@media (--sm) { .container { max-width: 640px; } }
@media (--md) { .container { max-width: 768px; } }
@media (--lg) { .container { max-width: 1024px; } }
@media (--xl) { .container { max-width: 1280px; } }`

    await run(src, expected)
  })

  it('should selectively generate .container for some specific breakpoints',
    async () => {
      let src = newSheet`
@container md xl;`

      let expected = newSheet`
.container { width: 100%; }
@media (--md) { .container { max-width: 768px; } }
@media (--xl) { .container { max-width: 1280px; } }`

      await run(src, expected)
    })
})
