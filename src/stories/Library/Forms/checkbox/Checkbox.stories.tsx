import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Checkbox } from "./Checkbox";

export default {
  title: "Library / Forms / Checkbox",
  component: Checkbox,
  decorators: [withDesign],
  argTypes: {
    ariaLabel: {
      control: {
        type: "text",
      },
    },
    // We disable the isChecked control, since it is not possible to
    // get the states from the React component to work with Storybook controls.
    isChecked: {
      control: {
        disable: true,
      },
    },
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

// Show multiple checkboxes to make it easier to test keyboard navigation.
const Several: ComponentStory<typeof Checkbox> = (args) => (
  <>
    {[1, 2, 3, 4, 5].map((value) => {
      const { label } = args;
      // Append a number to make it easier to distinguish between each entry.
      const elementArgs = { ...args, label: `${label} ${value}` };
      return <Checkbox {...elementArgs} />;
    })}
  </>
);

export const Multiple = Several.bind({});
Multiple.args = {
  isChecked: false,
  label: "Checkbox",
};
