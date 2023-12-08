# Icon Usage Guidelines

This folder contains SVG icons that are used in the design system. When using
icons from this folder, please follow the guidelines below:

- Icons located in public/ folder is the current source of truth. All icons
will be placed in this folder. Ensure that icons placed gere are using the
`class` attribute, and not `className` for SVG element.

- For icons used in React components that require class modifications or
similar, first create the icon in public/icons, and then manually copy the SVG
from the `public/icons` folder and make any necessary changes, i.e replacing
the `class` with `className` or other modifications.

Currently, there is no automated solution for this process that ensures
consistency for this. This may be changed in the future.
