import { StoryFn, Meta } from "@storybook/react";

import ArrowLink from "./ArrowLink";

export default {
  title: "Library / Links / ArrowLink",
  component: ArrowLink,
  argTypes: {
    label: {
      control: "text",
    },
  },
  args: {
    label: "Go back",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477%3A39098&mode=dev",
    },
    layout: "centered",
  },
} as Meta<typeof ArrowLink>;

const Template: StoryFn<typeof ArrowLink> = (args) => <ArrowLink {...args} />;

export const Default = Template.bind({});
