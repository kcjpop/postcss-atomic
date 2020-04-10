const { default: alignContent } = require('tailwindcss/lib/plugins/alignContent')
const { default: alignItems } = require('tailwindcss/lib/plugins/alignItems')
const { default: alignSelf } = require('tailwindcss/lib/plugins/alignSelf')
const { default: appearance } = require('tailwindcss/lib/plugins/appearance')
const { default: backgroundAttachment } = require('tailwindcss/lib/plugins/backgroundAttachment')
const { default: backgroundRepeat } = require('tailwindcss/lib/plugins/backgroundRepeat')
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

const { extractTailwindDefinition, processBlockRule } = require('../generator')
const border = require('./border')
const color = require('./color')
const container = require('./container')
// const font = require('./font')
const height = require('./height')
const letterSpacing = require('./letterSpacing')
const margin = require('./margin')
const padding = require('./padding')
const rounded = require('./rounded')
const width = require('./width')

function processTailwindPlugins (...plugins) {
  return processBlockRule(new Map(extractTailwindDefinition(...plugins)))
}

module.exports = [
  ['align', processTailwindPlugins(alignContent, alignItems, alignSelf)],
  ['appearance', processTailwindPlugins(appearance)],
  ['background', processTailwindPlugins(backgroundAttachment, backgroundRepeat)],
  ['border', border],
  ['box-sizing', processTailwindPlugins(boxSizing)],
  ['clear', processTailwindPlugins(clear)],
  ['color', color],
  ['container', container],
  ['display', processTailwindPlugins(display)],
  ['display', processTailwindPlugins(display)],
  ['flex', processTailwindPlugins(flexDirection, flexWrap)],
  ['float', processTailwindPlugins(float)],
  ['font', processTailwindPlugins(fontSmoothing, fontStyle)],
  ['grid', processTailwindPlugins(gridAutoFlow)],
  ['height', height],
  ['justify', processTailwindPlugins(justifyContent)],
  ['letter-spacing', letterSpacing],
  ['list', processTailwindPlugins(listStylePosition)],
  ['margin', margin],
  ['object-fit', processTailwindPlugins(objectFit)],
  ['outline', processTailwindPlugins(outline)],
  ['overflow', processTailwindPlugins(overflow)],
  ['padding', padding],
  ['pointer', processTailwindPlugins(pointerEvents)],
  ['position', processTailwindPlugins(position)],
  ['resize', processTailwindPlugins(resize)],
  ['rounded', rounded],
  ['table', processTailwindPlugins(tableLayout)],
  ['text', processTailwindPlugins(textAlign, textDecoration, textTransform)],
  ['transform', processTailwindPlugins(transform)],
  ['user-select', processTailwindPlugins(userSelect)],
  ['vertical-align', processTailwindPlugins(verticalAlign)],
  ['visibility', processTailwindPlugins(visibility)],
  ['whitespace', processTailwindPlugins(whitespace)],
  ['width', width],
  ['word-break', processTailwindPlugins(wordBreak)]
]
