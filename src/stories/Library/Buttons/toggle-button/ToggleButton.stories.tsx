import { Meta, StoryFn } from "@storybook/react";

import ToggleButton from "./ToggleButton";

export default {
  title: "Library / Toggle button",
  component: ToggleButton,

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=607%3A35282",
    },
    layout: "centered",
  },
  argTypes: {
    isChecked: {
      defaultValue: false,
    },
  },
} as Meta<typeof ToggleButton>;

const Template: StoryFn<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const ToggleButtonExample = Template.bind({});
ToggleButtonExample.args = {
  isChecked: false,
};
