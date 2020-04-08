const { default: alignContent } = require('tailwindcss/lib/plugins/alignContent')
const { default: alignItems } = require('tailwindcss/lib/plugins/alignItems')
const { default: alignSelf } = require('tailwindcss/lib/plugins/alignSelf')
const { default: appearance } = require('tailwindcss/lib/plugins/appearance')
const { default: backgroundAttachment } = require('tailwindcss/lib/plugins/backgroundAttachment')
const { default: backgroundRepeat } = require('tailwindcss/lib/plugins/backgroundRepeat')
const { default: borderCollapse } = require('tailwindcss/lib/plugins/borderCollapse')
const { default: borderStyle } = require('tailwindcss/lib/plugins/borderStyle')
const { default: boxSizing } = require('tailwindcss/lib/plugins/boxSizing')
const { default: clear } = require('tailwindcss/lib/plugins/clear')
const { default: display } = require('tailwindcss/lib/plugins/display')
const { default: flexDirection } = require('tailwindcss/lib/plugins/flexDirection')
const { default: flexWrap } = require('tailwindcss/lib/plugins/flexWrap')
const { default: float } = require('tailwindcss/lib/plugins/float')
const { default: fontSmoothing } = require('tailwindcss/lib/plugins/fontSmoothing')
const { default: fontStyle } = require('tailwindcss/lib/plugins/fontStyle')
const { default: gridAutoFlow } = require('tailwindcss/lib/plugins/gridAutoFlow')
const { default: justifyContent } = require('tailwindcss/lib/plugins/justifyContent')
const { default: listStylePosition } = require('tailwindcss/lib/plugins/listStylePosition')
const { default: objectFit } = require('tailwindcss/lib/plugins/objectFit')
const { default: outline } = require('tailwindcss/lib/plugins/outline')
const { default: overflow } = require('tailwindcss/lib/plugins/overflow')
const { default: pointerEvents } = require('tailwindcss/lib/plugins/pointerEvents')
const { default: position } = require('tailwindcss/lib/plugins/position')
const { default: resize } = require('tailwindcss/lib/plugins/resize')
const { default: tableLayout } = require('tailwindcss/lib/plugins/tableLayout')
const { default: textAlign } = require('tailwindcss/lib/plugins/textAlign')
const { default: textDecoration } = require('tailwindcss/lib/plugins/textDecoration')
const { default: textTransform } = require('tailwindcss/lib/plugins/textTransform')
const { default: transform } = require('tailwindcss/lib/plugins/transform')
const { default: userSelect } = require('tailwindcss/lib/plugins/userSelect')
const { default: verticalAlign } = require('tailwindcss/lib/plugins/verticalAlign')
const { default: visibility } = require('tailwindcss/lib/plugins/visibility')
const { default: whitespace } = require('tailwindcss/lib/plugins/whitespace')
const { default: wordBreak } = require('tailwindcss/lib/plugins/wordBreak')

const { extractTailwindDefinition } = require('../generator')
const border = require('./border')
const color = require('./color')
const container = require('./container')
// const font = require('./font')
// const height = require('./height')
const letterSpacing = require('./letterSpacing')
const margin = require('./margin')
const padding = require('./padding')
const rounded = require('./rounded')
const width = require('./width')

module.exports = [
  ['align', extractTailwindDefinition(alignContent, alignItems, alignSelf)],
  ['appearance', extractTailwindDefinition(appearance)],
  ['background', extractTailwindDefinition(backgroundAttachment, backgroundRepeat)],
  ['border', border],
  ['border', extractTailwindDefinition(borderCollapse, borderStyle)],
  ['box-sizing', extractTailwindDefinition(boxSizing)],
  ['clear', extractTailwindDefinition(clear)],
  ['color', color],
  ['container', container],
  ['display', extractTailwindDefinition(display)],
  ['display', extractTailwindDefinition(display)],
  ['flex', extractTailwindDefinition(flexDirection, flexWrap)],
  ['float', extractTailwindDefinition(float)],
  ['font', extractTailwindDefinition(fontSmoothing, fontStyle)],
  ['grid', extractTailwindDefinition(gridAutoFlow)],
  ['justify', extractTailwindDefinition(justifyContent)],
  ['letter-spacing', letterSpacing],
  ['list', extractTailwindDefinition(listStylePosition)],
  ['margin', margin],
  ['object-fit', extractTailwindDefinition(objectFit)],
  ['outline', extractTailwindDefinition(outline)],
  ['overflow', extractTailwindDefinition(overflow)],
  ['padding', padding],
  ['pointer', extractTailwindDefinition(pointerEvents)],
  ['position', extractTailwindDefinition(position)],
  ['resize', extractTailwindDefinition(resize)],
  ['rounded', rounded],
  ['table', extractTailwindDefinition(tableLayout)],
  ['text', extractTailwindDefinition(textAlign, textDecoration, textTransform)],
  ['transform', extractTailwindDefinition(transform)],
  ['user-select', extractTailwindDefinition(userSelect)],
  ['vertical-align', extractTailwindDefinition(verticalAlign)],
  ['visibility', extractTailwindDefinition(visibility)],
  ['whitespace', extractTailwindDefinition(whitespace)],
  ['width', width],
  ['word-break', extractTailwindDefinition(wordBreak)]
]
