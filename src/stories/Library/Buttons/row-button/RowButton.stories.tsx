import { StoryFn, Meta } from "@storybook/react";

import RowButton from "./RowButton";

export default {
  title: "Library / Buttons / RowButton",
  component: RowButton,
  argTypes: {
    label: {
      control: "text",
    },
  },
  args: {
    label: "Netmedier",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7880%3A59070&mode=dev",
    },
    layout: "centered",
  },
} as Meta<typeof RowButton>;

const Template: StoryFn<typeof RowButton> = (args) => <RowButton {...args} />;

export const Default = Template.bind({});
