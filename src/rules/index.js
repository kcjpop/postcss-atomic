const { default: appearance } = require('tailwindcss/lib/plugins/appearance')
const { default: backgroundAttachment } = require('tailwindcss/lib/plugins/backgroundAttachment')
const { default: backgroundRepeat } = require('tailwindcss/lib/plugins/backgroundRepeat')
const { default: boxSizing } = require('tailwindcss/lib/plugins/boxSizing')
const { default: clear } = require('tailwindcss/lib/plugins/clear')
const { default: display } = require('tailwindcss/lib/plugins/display')
const { default: float } = require('tailwindcss/lib/plugins/float')
const { default: gridAutoFlow } = require('tailwindcss/lib/plugins/gridAutoFlow')
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
const bg = require('./bg')
const flex = require('./flex')
const font = require('./font')
const color = require('./color')
const width = require('./width')
const border = require('./border')
const height = require('./height')
const margin = require('./margin')
const padding = require('./padding')
const rounded = require('./rounded')
const container = require('./container')
const letterSpacing = require('./letterSpacing')
const zIndex = require('./zIndex')

function processTailwindPlugins (...plugins) {
  return processBlockRule(new Map(extractTailwindDefinition(...plugins)))
}

module.exports = [
  ['appearance', processTailwindPlugins(appearance)],
  ['background', processTailwindPlugins(backgroundAttachment, backgroundRepeat)],
  ['border', border],
  ['bg', bg],
  ['box-sizing', processTailwindPlugins(boxSizing)],
  ['clear', processTailwindPlugins(clear)],
  ['color', color],
  ['container', container],
  ['display', processTailwindPlugins(display)],
  ['display', processTailwindPlugins(display)],
  ['flex', flex],
  ['float', processTailwindPlugins(float)],
  ['font', font],
  ['grid', processTailwindPlugins(gridAutoFlow)],
  ['height', height],
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
  ['word-break', processTailwindPlugins(wordBreak)],
  ['z-index', zIndex]
]
