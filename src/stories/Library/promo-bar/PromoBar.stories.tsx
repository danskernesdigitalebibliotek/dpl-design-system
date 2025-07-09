import { StoryFn, Meta } from "@storybook/react-webpack5";

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
    },
    type: {
      name: "PromoBar Type",
      control: "radio",
      options: ["none", "info"],
    },
    theme: {
      name: "PromoBar Theme",
      control: "radio",
      options: ["none", "dark"],
    },
    sticky: {
      name: "PromoBar Sticky",
      control: "boolean",
    },
  },
  args: {
    text: "Spring køen over - Materialet findes i en anden udgave",
    type: "info",
    sticky: false,
    theme: "none",
  },
} as Meta<typeof PromoBar>;

const Template: StoryFn<typeof PromoBar> = (args) => <PromoBar {...args} />;

export const defaultPromoBar = Template.bind({});

export const darkThemePromoBar = Template.bind({});
darkThemePromoBar.args = {
  theme: "dark",
};
