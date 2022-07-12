import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { ToggleButton as ToggleButtonSB } from "./ToggleButton";

export default {
  title: "Atoms / Toggle button",
  component: ToggleButtonSB,
  decorators: [withDesign],
  argTypes: {
    isChecked: {
      defaultValue: false,
    },
  },
  parameters: {},
} as ComponentMeta<typeof ToggleButtonSB>;

const Template: ComponentStory<typeof ToggleButtonSB> = (args) => (
  <ToggleButtonSB {...args} />
);

export const ToggleButton = Template.bind({});
ToggleButton.args = {
  isChecked: false,
};
