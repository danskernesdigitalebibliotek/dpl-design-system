# SCSS strategy

In December 2023, we have aimed to streamline the way we write SCSS.
Some of these rules have not been applied on previous code, but moving forward,
this is what we aim to do.

## BEM naming convention

### Examples of do's and dont's

Assuming we have a Counter block:

- Styling must be placed in a correspondingly named file `counter.scss`
- `.counter__title` ✅
- `&__title` ❌ (`&__` should be avoided, to avoid massive indention.)
- `.counter-title` ❌ (Must start with `.FILE-NAME__`)
- `.counter__title__text` ❌ (Only one level)

#### Variants and modifiers

Sometimes you'll want to add variants to CSS-only classes. This can be done
using **modifier classes** - e.g. `.counter--large`, `.counter__title--large`.
**These classes must not be set alone.** E.g. `.counter__title--large` must not
exist on an element without also having `.counter__title`.

## Mixins, placeholder and variables

Shared tooling is saved in [src/styles/scss/tools](../src/styles/scss/tools),
NOT in individual stories.

### Typography

Typography is defined in
[src/styles/scss/tools/variables.typography.scss](../src/styles/scss/tools/variables.typography.scss).
These variables, all starting with `$typo__`, can be used, using a mixin,
`@include typography($typo__h2);` in stories.
Generally speaking, font styling should be avoided directly in stories, rather
adding new variants in the `variables.typography.scss` file.
This way, we can better keep track of what is available, and avoid duplicate
styling in the future.

## Legacy classes

In the future, we want to apply these rules to old code too. Until then,
the old classes are supported using the files
in [src/styles/scss/legacy](../src/styles/scss/legacy).

These classes should **not be used in new components**
