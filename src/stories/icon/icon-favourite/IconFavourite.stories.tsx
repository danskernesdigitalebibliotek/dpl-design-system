import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { IconFavourite } from "./IconFavourite";

type IconFavouriteProps = typeof IconFavourite;

export default {
  title: "Atoms / Icons",
  component: IconFavourite,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=656%3A5407",
    },
  },
  argTypes: {
    fill: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof IconFavourite>;

const Template: ComponentStory<typeof IconFavourite> = (args) => (
  <IconFavourite {...args} />
);

export const favourite = Template.bind({});
favourite.args = {
  fill: true,
};
