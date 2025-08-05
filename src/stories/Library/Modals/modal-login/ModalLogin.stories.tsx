import { Meta, StoryFn } from "@storybook/react-webpack5";
import { ModalLogin } from "./ModalLogin";

export default {
  title: "Library / Modals / Login",
  component: ModalLogin,
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11410",
    },
  },
} as Meta<typeof ModalLogin>;

const Template: StoryFn<typeof ModalLogin> = (args) => <ModalLogin {...args} />;

export const Item = Template.bind({});
Item.args = {
  showModal: true,
};
