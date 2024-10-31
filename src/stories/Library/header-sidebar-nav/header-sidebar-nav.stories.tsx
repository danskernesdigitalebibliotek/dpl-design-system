import { Meta, StoryFn } from "@storybook/react";

import HeaderSidebarNav, { HeaderSidebarNavProps } from "./header-sidebar-nav";
import { menuItems } from "../header-menu-list/HeaderMenuListData";

export default {
  title: "Library / Header Sidebar Nav",
  component: HeaderSidebarNav,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=1354-8717&mode=design&t=FVZ4DJ3kACnnV4jO-4",
    },
  },
  argTypes: {
    menuLinks: {
      table: {
        category: "Content",
      },
      description: "The links of the menu",
      control: { type: "object" },
    },
    menuOpen: {
      description: "The state of the menu",
      control: { type: "select", options: ["open", "closed"] },
    },
    isStorybookContext: {
      name: "Are we in storybook?",
      control: { type: "boolean" },
    },
  },
  args: {
    menuLinks: menuItems,
    menuOpen: "open",
    isStorybookContext: true,
  },
} as Meta<typeof HeaderSidebarNav>;

const Template: StoryFn<typeof HeaderSidebarNav> = (
  args: HeaderSidebarNavProps,
) => <HeaderSidebarNav {...args} />;

export const Default = Template.bind({});
