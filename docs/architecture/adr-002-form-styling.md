# Architecture Decision Record: Form styling

## Context

There are various types of forms within the project, and it is always a dilemma
as to whether to write specific styling per form, or if there should be a common
set of base classes that can be used throughout the project.

## Decision

We have decided to create a set of `default classes` to be used when building
different kinds of forms, as to not create a large amount of location that
contain form styling. Considering the forms within the project all look very
similar/consist of elements that look the same, it will be an advantage to have
a centralized place to expand//apply future changes to.

As we follow the BEM class structure, the block is called "dpl-form", which can
be expanded with elements, and modifiers.

## Alternatives considered

We considered writing new classes every time we introduced a new form, however,
this seemed like the inferior option. If a specific form element was to change
styling in the future, we would have to adjust all of the specific instances,
instead of having a singular definition. And in case a specific instance needs
to adopt a different styling, it can be achieved by creating a specific class
fot that very purpose.

## Consequences

As per this decision, we expect introduction of new form elements to be styled
expanding the current `dpl-form` class.

This currently has an exception in form of form inputs - these have been styled
a long time ago and use the class "dpl-input".

### Implementation in the dpl-design-system

Here is the [link to our form css file](../src/stories/Blocks/form/form.scss).
