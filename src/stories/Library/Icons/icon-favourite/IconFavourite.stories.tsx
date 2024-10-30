import { StoryFn, Meta } from "@storybook/react";

import { IconFavourite } from "./IconFavourite";

export default {
  title: "Library / Icons",
  component: IconFavourite,

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
} as Meta<typeof IconFavourite>;

const Template: StoryFn<typeof IconFavourite> = (args) => (
  <IconFavourite {...args} />
);

export const favourite = Template.bind({});
favourite.args = {};
