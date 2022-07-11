import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { ButtonFavourite } from "./ButtonFavourite";

export default {
  title: "Library / Buttons / Button Favourite",
  component: ButtonFavourite,
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
} as ComponentMeta<typeof ButtonFavourite>;

const Template: ComponentStory<typeof ButtonFavourite> = (args) => (
  <ButtonFavourite {...args} />
);

export const favourite = Template.bind({});
favourite.args = {};
