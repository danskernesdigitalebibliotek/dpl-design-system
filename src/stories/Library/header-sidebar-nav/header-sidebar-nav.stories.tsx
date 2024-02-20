import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import HeaderSidebarNav, { HeaderSidebarNavProps } from "./header-sidebar-nav";
import { menuItems } from "../header-menu-list/HeaderMenuListData";

export default {
  title: "Library / Header Sidebar Nav",
  component: HeaderSidebarNav,
  decorators: [withDesign],
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
      defaultValue: menuItems,
    },
    menuOpen: {
      description: "The state of the menu",
      defaultValue: "open",
      control: { type: "select", options: ["open", "closed"] },
    },
  },
} as ComponentMeta<typeof HeaderSidebarNav>;

const Template: ComponentStory<typeof HeaderSidebarNav> = (
  args: HeaderSidebarNavProps
) => <HeaderSidebarNav {...args} />;

export const Default = Template.bind({});
