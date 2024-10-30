import { Meta, StoryFn } from "@storybook/react";

import { RadioDrupal } from "./RadioDrupal";

export default {
  title: "Library / Forms / Radio",
  component: RadioDrupal,

  argTypes: {
    legend: {
      control: {
        type: "text",
        defaultValue: "This is a legend.",
      },
    },
    description: {
      control: {
        type: "text",
        defaultValue: "This is a description.",
      },
    },
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
