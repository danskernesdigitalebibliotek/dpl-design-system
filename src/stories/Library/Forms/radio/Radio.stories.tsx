import { Meta, StoryFn } from "@storybook/react";

import { RadioDrupal } from "./RadioDrupal";

export default {
  title: "Library / Forms / Radio",
  component: RadioDrupal,
  argTypes: {
    legend: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
  args: {
    legend: "This is a legend",
    description: "This is a description.",
  },
  parameters: {
    layout: "centered",
  },
} as Meta<typeof RadioDrupal>;

const Template: StoryFn<typeof RadioDrupal> = (args) => (
  <RadioDrupal {...args} />
);

export const drupalRadio = Template.bind({});
drupalRadio.args = {
  legend: "Try this radio",
  description: "This is a description.",
};
