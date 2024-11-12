import { StoryFn, Meta } from "@storybook/react";

import { ButtonFavourite } from "./ButtonFavourite";

export default {
  title: "Library / Buttons / Button Favourite",
  component: ButtonFavourite,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=656%3A5407",
    },
    layout: "centered",
  },
  argTypes: {
    fill: {
      control: "boolean",
    },
  },
  args: {
    fill: true,
  },
} as Meta<typeof ButtonFavourite>;

const Template: StoryFn<typeof ButtonFavourite> = (args) => (
  <ButtonFavourite {...args} />
);

export const favourite = Template.bind({});
