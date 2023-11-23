import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ArrowLink from "./ArrowLink";

export default {
  title: "Library / Links / ArrowLink",
  component: ArrowLink,
  decorators: [withDesign],
  argTypes: {
    label: {
      defaultValue: "Go back",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477%3A39098&mode=dev",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof ArrowLink>;

const Template: ComponentStory<typeof ArrowLink> = (args) => (
  <ArrowLink {...args} />
);

export const Default = Template.bind({});
