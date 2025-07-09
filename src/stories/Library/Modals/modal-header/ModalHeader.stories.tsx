import { Meta, StoryFn } from "@storybook/react-webpack5";
import { ModalHeader } from "./ModalHeader";

export default {
  title: "Library / Modals / Header",
  component: ModalHeader,
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11410",
    },
  },
} as Meta<typeof ModalHeader>;

const Template: StoryFn<typeof ModalHeader> = (args) => (
  <ModalHeader {...args} />
);

export const Item = Template.bind({});
Item.args = {
  headerName: "Christine-Olivia Kristensen har et meget langt navn",
  headerLinkHref: "/",
  headerLinkText: "Se din profil",
};
