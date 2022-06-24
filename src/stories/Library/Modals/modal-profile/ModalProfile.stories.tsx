import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalProfile } from "./ModalProfile";

export default {
  title: "Library / Modals / Profile",
  component: ModalProfile,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11410",
    },
  },
} as ComponentMeta<typeof ModalProfile>;

const Template: ComponentStory<typeof ModalProfile> = (args) => (
  <ModalProfile {...args} />
);

export const Item = Template.bind({});
Item.args = {
  showModal: true,
  name: "Christine-Olivia Kristensen har et meget langt navn",
  headerLinkUrl: "/",
  headerLinkText: "Se din profil",
  profileNavLinks: [
    {
      title: "Lån",
      href: "/",
      counter: "12",
    },
    {
      title: "Reserveringer",
      href: "/",
      counter: "7",
    },
    {
      title: "Huskeliste",
      href: "/",
    },
    {
      title: "Gebyrer og erstatninger",
      href: "/",
    },
    {
      title: "Gemte søgninger",
      href: "/",
      counter: "3",
    },
    {
      title: "Lånehistorik",
      href: "/",
    },
    {
      title: "Brugeroplysninger",
      href: "/",
    },
  ],
};
