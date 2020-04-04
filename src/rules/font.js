const { processBlockRule } = require('../generator')

module.exports = processBlockRule(
  new Map([
    [
      '.font-sans',
      {
        'font-family':
        // eslint-disable-next-line
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
    ['.italic', { 'font-style': 'italic' }],
    ['.not-italic', { 'font-style': 'normal' }]
  ])
)
