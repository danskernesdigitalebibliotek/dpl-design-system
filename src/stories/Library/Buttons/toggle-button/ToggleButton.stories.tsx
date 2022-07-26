import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ToggleButton from "./ToggleButton";

export default {
  title: "Library / Toggle button",
  component: ToggleButton,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=607%3A35282",
    },
  },
  argTypes: {
    isChecked: {
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const ToggleButtonExample = Template.bind({});
ToggleButtonExample.args = {
  isChecked: false,
};
