import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalHeader } from "./ModalHeader";

export default {
  title: "Library / Modals / Header",
  component: ModalHeader,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11410",
    },
  },
} as ComponentMeta<typeof ModalHeader>;

const Template: ComponentStory<typeof ModalHeader> = (args) => (
  <ModalHeader {...args} />
);

export const Item = Template.bind({});
Item.args = {
  name: "Christine-Olivia Kristensen har et meget langt navn",
  headerLinkHref: "/",
  headerLinkText: "Se din profil",
};
