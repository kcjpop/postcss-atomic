const { processBlockRule } = require('../helpers')

module.exports = processBlockRule(
  new Map([
    ['.text-left', { 'text-align': 'left' }],
    ['.text-center', { 'text-align': 'center' }],
    ['.text-right', { 'text-align': 'right' }],
    ['.text-justify', { 'text-align': 'justify' }],

    ['.underline', { 'text-decoration': 'underline' }],
    ['.line-through', { 'text-decoration': 'line-through' }],
    ['.no-underline', { 'text-decoration': 'none' }],

    ['.uppercase', { 'text-transform': 'uppercase' }],
    ['.lowercase', { 'text-transform': 'lowercase' }],
    ['.capitalize', { 'text-transform': 'capitalize' }],
    ['.normal-case', { 'text-transform': 'none' }],

    ['.text-xs', { 'font-size': '.75rem' }],
    ['.text-sm', { 'font-size': '.875rem' }],
    ['.text-base', { 'font-size': '1rem' }],
    ['.text-lg', { 'font-size': '1.125rem' }],
    ['.text-xl', { 'font-size': '1.25rem' }],
    ['.text-2xl', { 'font-size': '1.5rem' }],
    ['.text-3xl', { 'font-size': '1.875rem' }],
    ['.text-4xl', { 'font-size': '2.25rem' }],
    ['.text-5xl', { 'font-size': '3rem' }],
    ['.text-6xl', { 'font-size': '4rem' }]
  ])
)
