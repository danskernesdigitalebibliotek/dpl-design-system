import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { IconHeart } from "./IconHeart";

type IconHeartProps = typeof IconHeart;

export default {
  title: "Atoms / Icons",
  component: IconHeart,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1385%3A10755",
    },
  },
  argTypes: {
    fill: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof IconHeart>;

const Template: ComponentStory<typeof IconHeart> = (args) => (
  <IconHeart {...args} />
);

export const Heart = Template.bind({});
Heart.args = {
  fill: true,
};
