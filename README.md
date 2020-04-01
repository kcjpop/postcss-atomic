## PostCSS Atomic

[PostCSS] plugin to generate atomic CSS classes using Tailwind vocabulary.

[PostCSS]: https://github.com/postcss/postcss

🚨🚨🚨 WORK IN PROGRESS. FEEDBACK/ IDEAS ARE WELCOME. 🚨🚨🚨

## Why?

Atomic CSS frameworks are great for prototyping, but it's hassle to customise them. It gets even worse when we want to cut down the file size, which involves different tools and techniques. When time comes, those concerns usually get in developers' workflow.

This plugin aims to solve those problems by providing some extra rules to automatically generate atomic CSS classes. It is:

- Minimal by default. Developers only include what they need.
- Flexible. Developers can chose to generate a whole set of classes, or only ones they need.
- Customisable to an atomic level. It is posible to have a hover class for one particular colour, while creating a focus class for another one.
- Just CSS. No need to involve JavaScript into the workflow (kinda).
- Source-map friendly.

## Example

Input:

```css
:root {
  --white-100: #eff0f3;
  --white-200: #fffffe;
  --black-100: #0d0d0d;
  --black-200: #2a2a2a;
}

@custom-media --sm (min-width: 640px);
@custom-media --md (min-width: 768px);
@custom-media --lg (min-width: 1024px);
@custom-media --xl (min-width: 1280px);

/* Each at-rule/ directive is a set of related utility classes */
@container;

/* Generate all classes of "float" directive */
@float;

/* Or select which classes will be created */
@display {
  /* Base rule without responsive, hover, or focus variations */
  .inline-flex {}

  .flex {
    /* Generate rules for those breakpoints */
    media: sm md lg xl;
    /* or using "all", same as above */
    hover: all;
    /* or specifying interested breakpoints */
    focus: lg xl;
  }
}
```

Output:

```css
:root {
  --white-100: #eff0f3;
  --white-200: #fffffe;
  --black-100: #0d0d0d;
  --black-200: #2a2a2a;
}

@custom-media --sm (min-width: 640px);
@custom-media --md (min-width: 768px);
@custom-media --lg (min-width: 1024px);
@custom-media --xl (min-width: 1280px);

.container {
  width: 100%;
}
.float-right {
  float: right;
}
.float-left {
  float: left;
}
.float-none {
  float: none;
}
.inline-flex {
  display: inline-flex;
}
.flex {
  display: flex;
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
}
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

- [ ] Implement more at-rules
- [ ] Support `!important`
- [ ] Discuss: How to differentiate between colour and other variables?
- [ ] Discuss: How to handle comments?
- [ ] Discuss: Should the usage of this plugin be wrapped in `@atomic {}` for example?
