## PostCSS Atomic

[![CircleCI](https://img.shields.io/circleci/build/github/kcjpop/postcss-atomic/master?style=flat-square)](https://circleci.com/gh/kcjpop/postcss-atomic) [![Coveralls](https://img.shields.io/coveralls/github/kcjpop/postcss-atomic/master?style=flat-square)](https://coveralls.io/github/kcjpop/postcss-atomic)

[PostCSS] plugin to generate atomic CSS classes using Tailwind vocabulary.

[PostCSS]: https://github.com/postcss/postcss

🚨🚨🚨 WORK IN PROGRESS. FEEDBACK/ IDEAS ARE WELCOME. 🚨🚨🚨

## Why?

Atomic CSS frameworks are great for prototyping, but it's hassle to customise. It gets even worse when we want to cut down the bundle size, which involves different tools and techniques. When time comes, those concerns usually get  the way of development.

This plugin aims to solve those problems by providing some extra CSS rules to automatically generate atomic classes. It is:

- Minimal by default: Developers only include what they need.
- Flexible: Developers can chose to generate a whole set of classes, or only ones they need.
- Customisable to an atomic level: It is posible to have a hover class for one particular colour, while creating a focus class for another one.
- Supporting all no-parameter pseudo-classes.
- Mostly CSS: No need to involve JavaScript into the workflow (kinda a).
- Source-map friendly.

## Example

Input `styles.css`:

```css
:root {
  /* Scaling factors */
  --width-scale: 0.25rem;
  --height-scale: 0.25rem;
  --margin-scale: 0.25rem;
  --padding-scale: 0.25rem;
  --border-width-scale: 1px;
  /* Define a colour palette */
  --white-100: #eff0f3;
  --white-200: #fffffe;
  --black-100: #0d0d0d;
  --black-200: #2a2a2a;
}

/* And some breakpoints */
@custom-media --sm (min-width: 640px);
@custom-media --md (min-width: 768px);
@custom-media --lg (min-width: 1024px);
@custom-media --xl (min-width: 1280px);

/* Each directive is a set of related utility rules */
@container;

/* Generate all rules of "float" directive */
@float;

/* Or select which rules will be created */
@display {
  /* A rule without responsive or pseudo-class variants */
  .inline-flex {}

  .flex {
    /* Generate rules for these breakpoints */
    media: sm md lg xl;
    /* or using "all", same as above */
    hover: all;
    /* or specifying only interested breakpoints */
    focus: lg xl;
  }
}

/* Or generate pseudo-class variants for all classes of a directives */
@visibility {
  media: sm md lg xl;
  hover: all;
  focus: lg xl;
}

/* Pick only the color you need */
@color --white-100, --black-100 {
  /* Generate text color rules */
  @text;

  /* And here are for border-color rules */
  @border {
    media: sm;
    first-child: md;
    hover: lg;
    active: xl;
  };
}
```

Output:

```css
:root {
  /* Scaling factors */
  --width-scale: 0.25rem;
  --height-scale: 0.25rem;
  --margin-scale: 0.25rem;
  --padding-scale: 0.25rem;
  --border-width-scale: 1px;
  /* Define a colour palette */
  --white-100: #eff0f3;
  --white-200: #fffffe;
  --black-100: #0d0d0d;
  --black-200: #2a2a2a;
}

/* And some breakpoints */
@custom-media --sm (min-width: 640px);
@custom-media --md (min-width: 768px);
@custom-media --lg (min-width: 1024px);
@custom-media --xl (min-width: 1280px);

/* Each directive is a set of related utility rules */
.container {
  width: 100%;
}

/* Generate all rules of "float" directive */
.float-right {
  float: right;
}
.float-left {
  float: left;
}
.float-none {
  float: none;
}
.clearfix\:after {
  content: "";
  display: table;
  clear: both;
}

/* Or select which rules will be created */
.inline-flex {
  display: inline-flex;
}
.flex {
  display: flex;
}

/* Or generate pseudo-class variants for all classes of a directives */
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}

/* Pick only the color you need */
.text-white-100 {
  color: var(--white-100);
}
.border-white-100 {
  border-color: var(--white-100);
}
.text-black-100 {
  color: var(--black-100);
}
.border-black-100 {
  border-color: var(--black-100);
}
@media (--sm) {
  .container {
    max-width: 640px;
  }
  .sm\:flex {
    display: flex;
  }
  .sm\:hover\:flex:hover {
    display: flex;
  }
  .sm\:visible {
    visibility: visible;
  }
  .sm\:invisible {
    visibility: hidden;
  }
  .sm\:hover\:visible:hover {
    visibility: visible;
  }
  .sm\:hover\:invisible:hover {
    visibility: hidden;
  }
  .sm\:border-white-100 {
    border-color: var(--white-100);
  }
  .sm\:border-black-100 {
    border-color: var(--black-100);
  }
}
@media (--md) {
  .container {
    max-width: 768px;
  }
  .md\:flex {
    display: flex;
  }
  .md\:hover\:flex:hover {
    display: flex;
  }
  .md\:visible {
    visibility: visible;
  }
  .md\:invisible {
    visibility: hidden;
  }
  .md\:hover\:visible:hover {
    visibility: visible;
  }
  .md\:hover\:invisible:hover {
    visibility: hidden;
  }
  .md\:first-child\:border-white-100:first-child {
    border-color: var(--white-100);
  }
  .md\:first-child\:border-black-100:first-child {
    border-color: var(--black-100);
  }
}
@media (--lg) {
  .container {
    max-width: 1024px;
  }
  .lg\:flex {
    display: flex;
  }
  .lg\:hover\:flex:hover {
    display: flex;
  }
  .lg\:focus\:flex:focus {
    display: flex;
  }
  .lg\:visible {
    visibility: visible;
  }
  .lg\:invisible {
    visibility: hidden;
  }
  .lg\:hover\:visible:hover {
    visibility: visible;
  }
  .lg\:hover\:invisible:hover {
    visibility: hidden;
  }
  .lg\:focus\:visible:focus {
    visibility: visible;
  }
  .lg\:focus\:invisible:focus {
    visibility: hidden;
  }
  .lg\:hover\:border-white-100:hover {
    border-color: var(--white-100);
  }
  .lg\:hover\:border-black-100:hover {
    border-color: var(--black-100);
  }
}
@media (--xl) {
  .container {
    max-width: 1280px;
  }
  .xl\:flex {
    display: flex;
  }
  .xl\:hover\:flex:hover {
    display: flex;
  }
  .xl\:focus\:flex:focus {
    display: flex;
  }
  .xl\:visible {
    visibility: visible;
  }
  .xl\:invisible {
    visibility: hidden;
  }
  .xl\:hover\:visible:hover {
    visibility: visible;
  }
  .xl\:hover\:invisible:hover {
    visibility: hidden;
  }
  .xl\:focus\:visible:focus {
    visibility: visible;
  }
  .xl\:focus\:invisible:focus {
    visibility: hidden;
  }
  .xl\:active\:border-white-100:active {
    border-color: var(--white-100);
  }
  .xl\:active\:border-black-100:active {
    border-color: var(--black-100);
  }
}
/*# sourceMappingURL=styles.css.map */
```

## Usage

Add this to `postcss.config.js`.

```diff
module.exports = {
  plugins: [
+   require('postcss-atomic'),
    require('autoprefixer')
  ]
}
```

As this plugin relies on custom media queries syntax, `postcss-custom-media` or `postcss-preset-env` is recommended.

Then in your CSS file, define:

```css
:root {
  --width-scale: 0.25rem;
  --height-scale: 0.25rem;
  --margin-scale: 0.25rem;
  --padding-scale: 0.25rem;
  --border-width-scale: 1px;
  /* Colours that you'll use in your design */
  --white-100: #eff0f3;
  --white-200: #fffffe;
  --black-100: #0d0d0d;
  --black-200: #2a2a2a;
}

/* And the site's breakpoints */
@custom-media --sm (min-width: 640px);
@custom-media --md (min-width: 768px);
@custom-media --lg (min-width: 1024px);
@custom-media --xl (min-width: 1280px);

/* Declare which rules you want to generate here */
```

## Todos

- [ ] Implement more directives
  - [ ] boxShadow
  - [ ] cursor
  - [ ] fill
  - [ ] gap
  - [ ] gridColumn
  - [ ] gridColumnEnd
  - [ ] gridColumnStart
  - [ ] gridRow
  - [ ] gridRowEnd
  - [ ] gridRowStart
  - [ ] gridTemplateColumns
  - [ ] gridTemplateRows
  - [ ] inset
  - [ ] lineHeight
  - [ ] listStyleType
  - [ ] maxHeight
  - [ ] maxWidth
  - [ ] minHeight
  - [ ] minWidth
  - [ ] objectPosition
  - [ ] opacity
  - [ ] rotate
  - [ ] scale
  - [ ] skew
  - [ ] stroke
  - [ ] strokeWidth
  - [ ] transformOrigin
  - [ ] transitionDuration
  - [ ] transitionProperty
  - [ ] transitionTimingFunction
  - [ ] translate
  - [ ] width
  - [ ] wordBreak
  - [ ] zIndex
- [ ] Support `!important`
- [ ] Optimisation: Pre-calculate `calc()` expressions
- [ ] Discuss: Should the usage of this plugin be wrapped in `@atomic {}` for example?
