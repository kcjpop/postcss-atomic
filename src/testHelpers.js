/* global expect */
/* istanbul ignore file */
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

module.exports = { run, compile, newSheet }
