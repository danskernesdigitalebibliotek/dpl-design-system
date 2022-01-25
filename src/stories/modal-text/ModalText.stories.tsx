import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalText } from "./ModalText";

export default {
  title: "Components / Modal - Text",
  component: ModalText,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11417",
    },
  },
} as ComponentMeta<typeof ModalText>;

const Template: ComponentStory<typeof ModalText> = (args) => (
  <ModalText {...args} />
);

export const Text = Template.bind({});
Text.args = {
  showModal: true,
};
