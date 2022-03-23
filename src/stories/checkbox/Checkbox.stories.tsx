import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Checkbox } from "./Checkbox";

export default {
  title: "Atoms / Checkbox",
  component: Checkbox,
  decorators: [withDesign],
  argTypes: {
    // We disable the isChecked control, since it is not possible to
    // get the states from the React component to work with Storybook controls.
    isChecked: { 
      control: {
        disable: true
      }
    }
  },
  parameters: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
  label: "Toggle this checkbox",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  isChecked: false,
  label: "Toggle this checkbox",
};
