import { Meta, StoryFn } from "@storybook/react-webpack5";

import { ModalProfile } from "./ModalProfile";

export default {
  title: "Library / Modals / Profile",
  component: ModalProfile,
  argTypes: {
    showModal: { control: "boolean" },
    headerName: { control: "text" },
    headerLinkHref: { control: "text" },
    headerLinkText: { control: "text" },
    notifications: { control: "object" },
    profileNavLinks: { control: "object" },
  },
  args: {
    showModal: true,
    headerName: "Christine-Olivia Kristensen har et meget langt navn",
    headerLinkHref: "/",
    headerLinkText: "Se din profil",
    notifications: [
      {
        href: "/",
        label: {
          label: "overskredet",
          status: "danger",
        },
        number: {
          label: 2,
          status: "danger",
        },
        title: "Afleveret for sent",
        showDot: true,
      },
      {
        href: "/",
        label: {
          label: "overskredet",
          status: "warning",
        },
        number: {
          label: 2,
          status: "warning",
        },
        title: "Lån overskredet",
        showDot: true,
      },
    ],
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
        counter: "",
      },
      {
        title: "Gebyrer og erstatninger",
        href: "/",
        counter: "",
      },
      {
        title: "Gemte søgninger",
        href: "/",
        counter: "3",
      },
      {
        title: "Lånehistorik",
        href: "/",
        counter: "",
      },
      {
        title: "Brugeroplysninger",
        href: "/",
        counter: "",
      },
    ],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11410",
    },
  },
} as Meta<typeof ModalProfile>;

const Template: StoryFn<typeof ModalProfile> = (args) => (
  <ModalProfile {...args} />
);

export const Item = Template.bind({});
Item.args = {};
