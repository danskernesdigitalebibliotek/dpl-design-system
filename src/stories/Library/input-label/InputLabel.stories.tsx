import { StoryFn } from "@storybook/react";

import { InputLabel as InputLabelComp } from "./InputLabel";

type DropdownProps = typeof InputLabelComp;

export default {
  title: "Library / Input label",
  component: InputLabelComp,
  argTypes: {
    text: {
      defaultValue: "Her er en label",
    },
    required: {
      defaultValue: false,
    },
  },
  parameters: {
    layout: "padded",
  },
};

const Template: StoryFn<DropdownProps> = (args) => <InputLabelComp {...args} />;

export const InputLabel = Template.bind({});

export const RequiredInputLabel = Template.bind({});

RequiredInputLabel.args = {
  text: "Her er en required label",
  required: true,
};
