import { StoryFn, Meta } from "@storybook/react";

import PromoBar from "./PromoBar";

export default {
  title: "Library / PromoBar",
  component: PromoBar,

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=7632%3A29303&t=l9VZsQuEPc9hRg41-4",
    },
  },
  argTypes: {
    text: {
      name: "PromoBar Text",
      control: "text",
      defaultValue: "Spring køen over - Materialet findes i en anden udgave",
    },
    type: {
      name: "PromoBar Type",
      control: {
        control: { type: "radio" },
        options: ["none", "info"],
      },
    },
    theme: {
      name: "PromoBar Theme",
      control: {
        control: { type: "radio" },
        options: ["none", "dark"],
      },
    },
    sticky: {
      name: "PromoBar Sticky",
      control: "boolean",
      defaultValue: false,
    },
  },
} as Meta<typeof PromoBar>;

const Template: StoryFn<typeof PromoBar> = (args) => <PromoBar {...args} />;

export const defaultPromoBar = Template.bind({});
defaultPromoBar.args = {
  type: "info",
  text: "Spring køen over - Materialet findes i en anden udgave",
  sticky: false,
  theme: "none",
};

export const darkThemePromoBar = Template.bind({});
darkThemePromoBar.args = {
  type: "info",
  text: "Spring køen over - Materialet findes i en anden udgave",
  sticky: false,
  theme: "dark",
};
