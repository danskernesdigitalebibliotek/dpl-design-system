export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Notifies Chromatic to pause the animations when they finish at a global level
  // This is because Chromatic doesn't show the cover image when the animation starts with opacity 0
  chromatic: { pauseAnimationAtEnd: true },
};
