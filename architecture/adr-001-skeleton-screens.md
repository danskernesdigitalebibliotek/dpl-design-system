# Architecture Decision Record: Skeleton Screens

## Context

In the work of trying to improve the performance of the search results
we needed a way to fill the viewport with a simulated interface in order to:

* Show some content immediately to the user
* Prevent layout shifting between loading state and ready state

## Decision

We decided to implement skeleton screens when loading data. The skeleton screens
are rendered in pure css.
The css classes are coming from the library: skeleton-screen-css

## Alternatives considered

The library is very small and based on simple css rules, so we could have
considered replicating it in our own design system or make something similar.
But by using the open source library we are ensured, to a certain extent,
that the code is being maintained, corrected and evolves as time goes by.

We could also have chosen to use images or GIF's to render the screens.
But by using the simple toolbox of skeleton-screen-css we should be able
to make screens for all the different use cases in the different apps.

## Consequences

It is now possible, with a limited amount of work, to construct skeleton screens
in the loading state of the various user interfaces.

Because we use library where skeletons are implemented purely in CSS
we also provide a solution which can be consumed in any technology
already using the design system without any additional dependencies,
client side or server side.
