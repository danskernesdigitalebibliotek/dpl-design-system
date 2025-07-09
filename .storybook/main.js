module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],

  addons: [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-designs",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],

  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
