import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import React from "react";
import { IconFavourite } from "./IconFavourite";

export default {
  title: "Library / Icons",
  component: IconFavourite,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=656%3A5407",
    },
  },
  argTypes: {
    fill: {
      control: "boolean",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof IconFavourite>;

const Template: ComponentStory<typeof IconFavourite> = (args) => (
  <IconFavourite {...args} />
);

export const favourite = Template.bind({});
favourite.args = {};
