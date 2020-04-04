const { processBlockRule } = require('../generator')

module.exports = processBlockRule(
  new Map([
    ['.h-0', { height: '0' }],
    ['.h-1', { height: '0.25rem' }],
    ['.h-2', { height: '0.5rem' }],
    ['.h-3', { height: '0.75rem' }],
    ['.h-4', { height: '1rem' }],
    ['.h-5', { height: '1.25rem' }],
    ['.h-6', { height: '1.5rem' }],
    ['.h-8', { height: '2rem' }],
    ['.h-10', { height: '2.5rem' }],
    ['.h-12', { height: '3rem' }],
    ['.h-16', { height: '4rem' }],
    ['.h-20', { height: '5rem' }],
    ['.h-24', { height: '6rem' }],
    ['.h-32', { height: '8rem' }],
    ['.h-40', { height: '10rem' }],
    ['.h-48', { height: '12rem' }],
    ['.h-56', { height: '14rem' }],
    ['.h-64', { height: '16rem' }],
    ['.h-auto', { height: 'auto' }],
    ['.h-px', { height: '1px' }],
    ['.h-full', { height: '100%' }],
    ['.h-screen', { height: '100vh' }]
  ])
)
