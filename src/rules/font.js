const { default: fontSmoothing } = require('tailwindcss/lib/plugins/fontSmoothing')
const { default: fontStyle } = require('tailwindcss/lib/plugins/fontStyle')

const { processBlockRule, extractTailwindDefinition } = require('../generator')

module.exports = processBlockRule(
  new Map([
    [
      '.font-sans',
      {
        'font-family':
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      }
    ],
    [
      '.font-serif',
      { 'font-family': 'Georgia, Cambria, "Times New Roman", Times, serif' }
    ],
    [
      '.font-mono',
      {
        'font-family':
        'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      }
    ],

    ['.font-hairline', { 'font-weight': '100' }],
    ['.font-thin', { 'font-weight': '200' }],
    ['.font-light', { 'font-weight': '300' }],
    ['.font-normal', { 'font-weight': '400' }],
    ['.font-medium', { 'font-weight': '500' }],
    ['.font-semibold', { 'font-weight': '600' }],
    ['.font-bold', { 'font-weight': '700' }],
    ['.font-extrabold', { 'font-weight': '800' }],
    ['.font-black', { 'font-weight': '900' }],

    ['.text-xs', { 'font-size': '.75rem' }],
    ['.text-sm', { 'font-size': '.875rem' }],
    ['.text-base', { 'font-size': '1rem' }],
    ['.text-lg', { 'font-size': '1.125rem' }],
    ['.text-xl', { 'font-size': '1.25rem' }],
    ['.text-2xl', { 'font-size': '1.5rem' }],
    ['.text-3xl', { 'font-size': '1.875rem' }],
    ['.text-4xl', { 'font-size': '2.25rem' }],
    ['.text-5xl', { 'font-size': '3rem' }],
    ['.text-6xl', { 'font-size': '4rem' }],

    ...extractTailwindDefinition(fontSmoothing, fontStyle)
  ])
)
