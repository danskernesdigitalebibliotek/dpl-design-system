import { StoryFn } from "@storybook/react-webpack5";

import { InputLabel as InputLabelComp } from "./InputLabel";

type DropdownProps = typeof InputLabelComp;

export default {
  title: "Library / Input label",
  component: InputLabelComp,
  argTypes: {
    text: { control: "text" },
    required: { control: "boolean" },
  },
  args: {
    text: "Her er en label",
    required: false,
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
