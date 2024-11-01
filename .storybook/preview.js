import "../src/styles/css/base.css";

export const parameters = {
  layout: "fullscreen",
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
    // 400 lies between our screen-xs & screen-s variables.
    // 1200 is the chromatic viewport we were using as default before adding an extra one for phones.
    viewports: [400, 1200],
  },
};
