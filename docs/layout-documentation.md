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
created to aligns with the recent developments in the project and is not
retroactively applied to earlier components or structures.

Layout related SCSS is defined in the `variables.layout.scss` file.

If anything in `variables.layout.scss` is modified or extended, make sure you
include your changes in this documentation.

## Variables

The file defines several variables for managing layout and spacing:

- `$layout__max-width--*`: These variables store the maximum width values
aligned with breakpoints.
- `block__max-width--*`: These variables store the maximum width values
between block (paragraph) elements.
- `$layout__edge-spacing`: This variable stores the edge spacing (padding)
value for containers.

All components that require a max-width should use the `block__max-width--*` 
variables along with layout-container. 

## Mixins

The file defines two mixins:

- `layout-container($max-width, $padding)`: This mixin sets the maximum width,
 and padding of an element, as well as centering them.

- `block-spacing($modifier)`: This manages the vertical margins of
elements, allowing for consistent spacing throughout the project. Use `$modifer`
to create negative/sibling styles.

Vertical padding is _not_ a part of layout.scss. Use regular `$spacing`
variables for that.

`block-spacing($modifier)` is an approach use for the CMS, where all 
paragraphs are rendered with a wrapper that will automatically add necessary 
spacing between the components. Any component that is not a paragraph, should
therefore follow this approach by including the mixin `@mixin block-spacing`

The `$modfier` is currently a either 
- `sibling` used for add a -1px to remove borders between sibling elements. 
- `negative` used for elements that require -margin instead.

## Utility Classes

**Important note** : Use utility classes only as a last resort. Prefer mixins
for responsive customization.

As we currently don't see/want these being applied, they do not include logic
for responsive customization like the mixins do.

The file defines several utility classes:

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

  @include media-query__small() {
    // Applying new edge spacing (Padding) using $spacings / other.
    @include layout-container($padding: $s-xl);
  }

 @include media-query__large() {
    // Removing max-width & applying specific padding from $spacings / other
     @include layout-container($max-width: 0, $padding: $s-md);
  }
}
```

### Adding spacing to non-paragraph elements in the cms. 

```scss
// Using block-spacing for non-paragraph component or container.
.your-BEM-component-name {
  @include block-spacing;
}
```


### Applying utility classes when mixins cannot be used

```html

<!-- layout utility using the default sizes -->
<div class="layout__max-width layout__edge-spacing">
  <!-- Content  -->
</div>

<!-- layout utility using respective specified sizes -->
<div class="layout__max-width--medium">
  <!-- Content  -->
</div>

```

If you aren't interested in applying for example an edge-spacing(padding), then
you might be expecting a --none modifier. If this is not obvious, then in this
 case you simply don't use a utility at all.

```html
<!-- layout utility respective specified sizes with no edge-spacing(padding) -->
<div class="layout__max-width">
  <!-- Content  -->
</div>

``````
