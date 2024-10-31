import { StoryFn, Meta } from "@storybook/react";

import RowButtons from "./RowButtons";

export default {
  title: "Library / Buttons / RowButtons",
  component: RowButtons,
  argTypes: {
    labels: {
      control: "object",
    },
  },
  args: {
    labels: ["Netmedier"],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7880%3A59070&mode=dev",
    },
    layout: "centered",
  },
} as Meta<typeof RowButtons>;

const Template: StoryFn<typeof RowButtons> = (args) => <RowButtons {...args} />;

export const TwoButtons = Template.bind({});
TwoButtons.args = {
  labels: ["Netmedier", "Licenser"],
};

export const ThreeAndMoreButtons = Template.bind({});
ThreeAndMoreButtons.args = {
  labels: ["Netmedier", "Licenser", "This is hiddden"],
};
