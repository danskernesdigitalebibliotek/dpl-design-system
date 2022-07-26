import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalLogin } from "./ModalLogin";

export default {
  title: "Library / Modals / Login",
  component: ModalLogin,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11410",
    },
  },
} as ComponentMeta<typeof ModalLogin>;

const Template: ComponentStory<typeof ModalLogin> = (args) => (
  <ModalLogin {...args} />
);

export const Item = Template.bind({});
Item.args = {
  showModal: true,
};
