import { ComponentStory } from "@storybook/react";

import { InputLabel as InputLabelComp } from "./InputLabel";

type DropdownProps = typeof InputLabelComp;

export default {
  title: "Library / Input label",
  component: InputLabelComp,
  argTypes: {
    text: {
      defaultValue: "Her er en label",
    },
  },
  parameters: {
    layout: "padded",
  },
};

const Template: ComponentStory<DropdownProps> = (args) => (
  <InputLabelComp {...args} />
);

export const InputLabel = Template.bind({});
