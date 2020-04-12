
const { newSheet, run } = require('../testHelpers')

describe('@bg', () => {
  it('should generate all rules', async () => {
    let src = newSheet`@bg;`

    let expected = newSheet`
.bg-fixed { background-attachment: fixed; }
.bg-local { background-attachment: local; }
.bg-scroll { background-attachment: scroll; }
.bg-auto { background-size: auto; }
.bg-cover { background-size: cover; }
.bg-contain { background-size: contain; }
.bg-bottom { background-position: bottom; }
.bg-center { background-position: center; }
.bg-left { background-position: left; }
.bg-left-bottom { background-position: left bottom; }
.bg-left-top { background-position: left top; }
.bg-right { background-position: right; }
.bg-right-bottom { background-position: right bottom; }
.bg-right-top { background-position: right top; }
.bg-top { background-position: top; }
.bg-repeat { background-repeat: repeat; }
.bg-no-repeat { background-repeat: no-repeat; }
.bg-repeat-x { background-repeat: repeat-x; }
.bg-repeat-y { background-repeat: repeat-y; }
.bg-repeat-round { background-repeat: round; }
.bg-repeat-space { background-repeat: space; }`

    await run(src, expected)
  })
})
