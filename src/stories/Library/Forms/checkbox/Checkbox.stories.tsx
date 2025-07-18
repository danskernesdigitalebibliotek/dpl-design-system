import { Meta, StoryFn } from "@storybook/react-webpack5";

import { Checkbox } from "./Checkbox";
import { CheckboxDrupal } from "./CheckboxDrupal";

export default {
  title: "Library / Forms / Checkbox",
  component: Checkbox,
  argTypes: {
    ariaLabel: { control: { type: "text" } },
    labelLinkText: { control: { type: "text" } },
    labelLinkHref: { control: { type: "text" } },
    validation: { control: { type: "text" } },
    includeHeadline: { control: { type: "null" } },
    description: { control: { type: "text" } },
    isChecked: { control: { disable: true } },
    label: { control: { type: "text" } },
  },
  args: {
    isChecked: false,
    label: "Toggle this checkbox",
    description: "This is a description.",
    validation: "",
  },
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
  label: "Toggle this checkbox",
};

export const CheckedWithLink = Template.bind({});
CheckedWithLink.args = {
  isChecked: true,
  label: "Toggle this checkbox",
  labelLinkText: "Se betingelser",
  labelLinkHref: "#",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  isChecked: false,
  label: "Toggle this checkbox",
  validation: "Error error error",
};

export const hiddenLabel = Template.bind({});
hiddenLabel.args = {
  isChecked: true,
  label: "Checkbox",
  hiddenLabel: true,
};

// Show multiple checkboxes to make it easier to test keyboard navigation.
const Several: StoryFn<typeof Checkbox> = (args) => (
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

// The stories below mimic HTML structure from Drupal for checkbox usage.
const DrupalCheckboxExample: StoryFn<typeof CheckboxDrupal> = (args) => (
  <CheckboxDrupal {...args} />
);

export const DrupalCheckbox = DrupalCheckboxExample.bind({});
DrupalCheckbox.args = {
  label: "Toggle this checkbox",
  description: "This is a description.",
};

export const DrupalMultiple = DrupalCheckboxExample.bind({});
DrupalMultiple.args = {
  label: "Toggle this checkbox",
  includeHeadline: true,
  description: "This is a description.",
};
