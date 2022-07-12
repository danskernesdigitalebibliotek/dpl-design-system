import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ToggleButton from "./ToggleButton";

export default {
  title: "Library / Toggle button",
  component: ToggleButton,
  decorators: [withDesign],
  argTypes: {
    isChecked: {
      defaultValue: false,
    },
  },
  parameters: {},
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const ToggleButtonExample = Template.bind({});
ToggleButtonExample.args = {
  isChecked: false,
};
