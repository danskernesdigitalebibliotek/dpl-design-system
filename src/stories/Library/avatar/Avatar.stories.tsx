import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  title: "Library / Avatar",
  component: Avatar,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1181%3A57001",
    },
  },
} as ComponentMeta<typeof ModalHeader>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Item = Template.bind({});
Item.args = {
  showModal: true,
};
