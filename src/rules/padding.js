const { processBlockRule } = require('../helpers')

module.exports = processBlockRule(
  new Map([
    ['.p-0', { padding: '0' }],
    ['.p-1', { padding: '0.25rem' }],
    ['.p-2', { padding: '0.5rem' }],
    ['.p-3', { padding: '0.75rem' }],
    ['.p-4', { padding: '1rem' }],
    ['.p-5', { padding: '1.25rem' }],
    ['.p-6', { padding: '1.5rem' }],
    ['.p-8', { padding: '2rem' }],
    ['.p-10', { padding: '2.5rem' }],
    ['.p-12', { padding: '3rem' }],
    ['.p-16', { padding: '4rem' }],
    ['.p-20', { padding: '5rem' }],
    ['.p-24', { padding: '6rem' }],
    ['.p-32', { padding: '8rem' }],
    ['.p-40', { padding: '10rem' }],
    ['.p-48', { padding: '12rem' }],
    ['.p-56', { padding: '14rem' }],
    ['.p-64', { padding: '16rem' }],
    ['.p-px', { padding: '1px' }],
    ['.pt-0', { 'padding-top': '0' }],
    ['.pt-1', { 'padding-top': '0.25rem' }],
    ['.pt-2', { 'padding-top': '0.5rem' }],
    ['.pt-3', { 'padding-top': '0.75rem' }],
    ['.pt-4', { 'padding-top': '1rem' }],
    ['.pt-5', { 'padding-top': '1.25rem' }],
    ['.pt-6', { 'padding-top': '1.5rem' }],
    ['.pt-8', { 'padding-top': '2rem' }],
    ['.pt-10', { 'padding-top': '2.5rem' }],
    ['.pt-12', { 'padding-top': '3rem' }],
    ['.pt-16', { 'padding-top': '4rem' }],
    ['.pt-20', { 'padding-top': '5rem' }],
    ['.pt-24', { 'padding-top': '6rem' }],
    ['.pt-32', { 'padding-top': '8rem' }],
    ['.pt-40', { 'padding-top': '10rem' }],
    ['.pt-48', { 'padding-top': '12rem' }],
    ['.pt-56', { 'padding-top': '14rem' }],
    ['.pt-64', { 'padding-top': '16rem' }],
    ['.pt-px', { 'padding-top': '1px' }],
    ['.pr-0', { 'padding-right': '0' }],
    ['.pr-1', { 'padding-right': '0.25rem' }],
    ['.pr-2', { 'padding-right': '0.5rem' }],
    ['.pr-3', { 'padding-right': '0.75rem' }],
    ['.pr-4', { 'padding-right': '1rem' }],
    ['.pr-5', { 'padding-right': '1.25rem' }],
    ['.pr-6', { 'padding-right': '1.5rem' }],
    ['.pr-8', { 'padding-right': '2rem' }],
    ['.pr-10', { 'padding-right': '2.5rem' }],
    ['.pr-12', { 'padding-right': '3rem' }],
    ['.pr-16', { 'padding-right': '4rem' }],
    ['.pr-20', { 'padding-right': '5rem' }],
    ['.pr-24', { 'padding-right': '6rem' }],
    ['.pr-32', { 'padding-right': '8rem' }],
    ['.pr-40', { 'padding-right': '10rem' }],
    ['.pr-48', { 'padding-right': '12rem' }],
    ['.pr-56', { 'padding-right': '14rem' }],
    ['.pr-64', { 'padding-right': '16rem' }],
    ['.pr-px', { 'padding-right': '1px' }],
    ['.pb-0', { 'padding-bottom': '0' }],
    ['.pb-1', { 'padding-bottom': '0.25rem' }],
    ['.pb-2', { 'padding-bottom': '0.5rem' }],
    ['.pb-3', { 'padding-bottom': '0.75rem' }],
    ['.pb-4', { 'padding-bottom': '1rem' }],
    ['.pb-5', { 'padding-bottom': '1.25rem' }],
    ['.pb-6', { 'padding-bottom': '1.5rem' }],
    ['.pb-8', { 'padding-bottom': '2rem' }],
    ['.pb-10', { 'padding-bottom': '2.5rem' }],
    ['.pb-12', { 'padding-bottom': '3rem' }],
    ['.pb-16', { 'padding-bottom': '4rem' }],
    ['.pb-20', { 'padding-bottom': '5rem' }],
    ['.pb-24', { 'padding-bottom': '6rem' }],
    ['.pb-32', { 'padding-bottom': '8rem' }],
    ['.pb-40', { 'padding-bottom': '10rem' }],
    ['.pb-48', { 'padding-bottom': '12rem' }],
    ['.pb-56', { 'padding-bottom': '14rem' }],
    ['.pb-64', { 'padding-bottom': '16rem' }],
    ['.pb-px', { 'padding-bottom': '1px' }],
    ['.pl-0', { 'padding-left': '0' }],
    ['.pl-1', { 'padding-left': '0.25rem' }],
    ['.pl-2', { 'padding-left': '0.5rem' }],
    ['.pl-3', { 'padding-left': '0.75rem' }],
    ['.pl-4', { 'padding-left': '1rem' }],
    ['.pl-5', { 'padding-left': '1.25rem' }],
    ['.pl-6', { 'padding-left': '1.5rem' }],
    ['.pl-8', { 'padding-left': '2rem' }],
    ['.pl-10', { 'padding-left': '2.5rem' }],
    ['.pl-12', { 'padding-left': '3rem' }],
    ['.pl-16', { 'padding-left': '4rem' }],
    ['.pl-20', { 'padding-left': '5rem' }],
    ['.pl-24', { 'padding-left': '6rem' }],
    ['.pl-32', { 'padding-left': '8rem' }],
    ['.pl-40', { 'padding-left': '10rem' }],
    ['.pl-48', { 'padding-left': '12rem' }],
    ['.pl-56', { 'padding-left': '14rem' }],
    ['.pl-64', { 'padding-left': '16rem' }],
    ['.pl-px', { 'padding-left': '1px' }],
    ['.py-0', { 'padding-top': '0', 'padding-bottom': '0' }],
    ['.py-1', { 'padding-top': '0.25rem', 'padding-bottom': '0.25rem' }],
    ['.py-2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' }],
    ['.py-3', { 'padding-top': '0.75rem', 'padding-bottom': '0.75rem' }],
    ['.py-4', { 'padding-top': '1rem', 'padding-bottom': '1rem' }],
    ['.py-5', { 'padding-top': '1.25rem', 'padding-bottom': '1.25rem' }],
    ['.py-6', { 'padding-top': '1.5rem', 'padding-bottom': '1.5rem' }],
    ['.py-8', { 'padding-top': '2rem', 'padding-bottom': '2rem' }],
    ['.py-10', { 'padding-top': '2.5rem', 'padding-bottom': '2.5rem' }],
    ['.py-12', { 'padding-top': '3rem', 'padding-bottom': '3rem' }],
    ['.py-16', { 'padding-top': '4rem', 'padding-bottom': '4rem' }],
    ['.py-20', { 'padding-top': '5rem', 'padding-bottom': '5rem' }],
    ['.py-24', { 'padding-top': '6rem', 'padding-bottom': '6rem' }],
    ['.py-32', { 'padding-top': '8rem', 'padding-bottom': '8rem' }],
    ['.py-40', { 'padding-top': '10rem', 'padding-bottom': '10rem' }],
    ['.py-48', { 'padding-top': '12rem', 'padding-bottom': '12rem' }],
    ['.py-56', { 'padding-top': '14rem', 'padding-bottom': '14rem' }],
    ['.py-64', { 'padding-top': '16rem', 'padding-bottom': '16rem' }],
    ['.py-px', { 'padding-top': '1px', 'padding-bottom': '1px' }],
    ['.px-0', { 'padding-right': '0', 'padding-left': '0' }],
    ['.px-1', { 'padding-right': '0.25rem', 'padding-left': '0.25rem' }],
    ['.px-2', { 'padding-right': '0.5rem', 'padding-left': '0.5rem' }],
    ['.px-3', { 'padding-right': '0.75rem', 'padding-left': '0.75rem' }],
    ['.px-4', { 'padding-right': '1rem', 'padding-left': '1rem' }],
    ['.px-5', { 'padding-right': '1.25rem', 'padding-left': '1.25rem' }],
    ['.px-6', { 'padding-right': '1.5rem', 'padding-left': '1.5rem' }],
    ['.px-8', { 'padding-right': '2rem', 'padding-left': '2rem' }],
    ['.px-10', { 'padding-right': '2.5rem', 'padding-left': '2.5rem' }],
    ['.px-12', { 'padding-right': '3rem', 'padding-left': '3rem' }],
    ['.px-16', { 'padding-right': '4rem', 'padding-left': '4rem' }],
    ['.px-20', { 'padding-right': '5rem', 'padding-left': '5rem' }],
    ['.px-24', { 'padding-right': '6rem', 'padding-left': '6rem' }],
    ['.px-32', { 'padding-right': '8rem', 'padding-left': '8rem' }],
    ['.px-40', { 'padding-right': '10rem', 'padding-left': '10rem' }],
    ['.px-48', { 'padding-right': '12rem', 'padding-left': '12rem' }],
    ['.px-56', { 'padding-right': '14rem', 'padding-left': '14rem' }],
    ['.px-64', { 'padding-right': '16rem', 'padding-left': '16rem' }],
    ['.px-px', { 'padding-right': '1px', 'padding-left': '1px' }]
  ])
)
