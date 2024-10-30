import { StoryFn } from "@storybook/react";

import Tag, { TagProps } from "./Tag";

export default {
  title: "Library / Tag / Tag",
  component: Tag,

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=836%3A5757",
    },
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      defaultValue: "Litteratur",
    },
    hasBackground: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

const Template: StoryFn<typeof Tag> = (args: TagProps) => <Tag {...args} />;
export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  hasBackground: true,
};

export const LargeWithBackground = Template.bind({});
LargeWithBackground.args = {
  size: "large",
  hasBackground: true,
};
