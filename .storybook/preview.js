export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chromatic: {
    // Notifies Chromatic to pause the animations when they finish at a global level
    // This is because Chromatic doesn't show the cover image when the animation starts with opacity 0
    pauseAnimationAtEnd: true,
    // Set the viewport widths that Chromatic tests with globally.
    viewports: [400, 1200]
  },
};
