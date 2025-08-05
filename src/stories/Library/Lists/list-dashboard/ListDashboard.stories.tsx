import { Meta, StoryFn } from "@storybook/react-webpack5";

import { ListDashboard } from "./ListDashboard";

export default {
  title: "Library / Lists / Dashboard",
  component: ListDashboard,
  argTypes: {
    label: {
      control: "object",
    },
    number: {
      control: "object",
    },
    title: {
      control: "text",
    },
    showDot: {
      control: "boolean",
    },
    href: {
      control: "text",
    },
    isSkeleton: {
      control: "boolean",
    },
  },
  args: {
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
    href: "/",
    isSkeleton: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1543%3A5965",
    },
  },
} as Meta<typeof ListDashboard>;

const Template: StoryFn<typeof ListDashboard> = (args) => (
  <div className="m-24">
    <ListDashboard {...args} />
  </div>
);

export const DashboardList = Template.bind({});

export const SkeletonScreen = Template.bind({});
SkeletonScreen.args = {
  isSkeleton: true,
};
