# Project Layout documentation & Examples

## Table of Contents

- [Introduction](#introduction)
- [Variables](#variables)
- [Mixins](#mixins)
- [Utility classes](#utility-classes)
- [Example Usage](#example-usage)

## Introduction

This documentation provides detailed information on the CSS/SCSS standards for
the 'formidling' project. It covers the usage of mixins for layout and spacing,
as well as guidelines for responsive design.

### Note on Applicability

This document and its standards apply specifically to elements of the
'formidling' project starting from December 1, 2023, and onwards. It has been
created to aligsn with the recent developments in the project and is not
retroactively applied to earlier components or structures.

Layout related SCSS is defined in the `variables.layout.scss` file.

If anything in `variables.layout.scss` is modified or extended, make sure you
include your changes in this documentation.

## Variables

The file defines several variables for managing layout and spacing:

- `$layout__max-width--*`: These variables store the maximum width values
aligned with breakpoints.
- `$_vertical-spacing--*`: These variables store the vertical spacing values.
- `$layout__edge-spacing`: This variable stores the edge spacing (padding)
value for containers.

Some components may use different variables. These should not be defined in
`variables.layout.scss`, but instead be kept in scss file for the relevant
component(s).

## Mixins

The file defines two mixins:

- `layout-container($max-width, $padding)`: This mixin sets the maximum width,
 and padding of an element, as well as centering them.

- `vertical-spacing($top, $bottom)`: This manages the vertical margins of
elements, allowing for consistent spacing throughout the project. This uses
margin in order to allow for collapsing margins if there design requires it
in the future.

Vertical padding is _not_ a part of layout.scss. Use regular `$spacing`
variables for that.

## Utility Classes

**Important note** : Use utility classes only as a last resort. Prefer mixins
for responsive customization.

As we currently don't see/want these being applied, they do not include logic
for responsive customization like the mixins do.

The file defines several utility classes:

- `.layout__vertical-spacing--*`: These classes apply the `vertical-spacing`
mixin with different values. Replace `*` with `small`, `medium`, `large`, or
`x-large`.
- `.layout__max-width--*`: These classes apply the `layout-container` mixin
with different maximum width values and zero padding. Replace `*` with
`x-small`, `small`, `medium`, `large`, `x-large`, or `xx-large`.
- `.layout__edge-spacing--*`: These classes apply different left and right
padding values. Replace `*` with `small`, `medium`, `large`, or `x-large`.

## Example Usage

Here are some examples of how to use these mixins, and utility classes.

### Including mixins in components using BEM

```scss
// Using mixins in your BEM-named parent container. 
.your-BEM-component-name {
  @include layout-container;
  @include vertical-spacing;

  @include media-query__small() {
    // Applying new edge spacing (Padding) using $spacings / other. 
    @include layout-container($padding: $s-xl);
    // applying new vertical spacing. 
    @include vertical-spacing(
      $top: $_layout-spacing--large,
      $bottom: $_layout-spacing--large
    );
  }
  
 @include media-query__large() {
    // Removing max-width & applying specific padding from $spacings / other
     @include layout-container($max-width: 0, $padding: $s-md);
    // Removing vertical spacing entirely. 
     @include vertical-spacing(
      $top: 0,
      $bottom: 0
    );
  }
}
```

### Applying utility classes when mixins cannot be used

```html

<!-- layout utility using the default sizes -->
<div class="layout__max-width layout__edge-spacing layout__vertical-spacing">
  <!-- Content  -->
</div>

<!-- layout utility using respective specified sizes -->
<div class="layout__max-width--medium layout__edge-spacing--large 
    layout__vertical-spacing--small">
  <!-- Content  -->
</div>

```

If you aren't interested in applying for example an edge-spacing(padding), then
you might be expecting a --none modifier. If this is not obvious, then in this
 case you simply don't use a utility at all.

```html
<!-- layout utility respective specified sizes with no edge-spacing(padding) -->
<div class="layout__max-width layout__vertical-spacing--small">
  <!-- Content  -->
</div>

``````
