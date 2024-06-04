import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ListDashboard } from "./ListDashboard";

export default {
  title: "Library / Lists / Dashboard",
  component: ListDashboard,
  decorators: [withDesign],
  argTypes: {
    label: {
      control: "object",
      defaultValue: {
        label: "overskredet",
        status: "danger",
      },
    },
    number: {
      control: "object",
      defaultValue: {
        label: "2",
        status: "danger",
      },
    },
    title: {
      control: "text",
      defaultValue: "Afleveret for sent",
    },
    showDot: {
      control: "boolean",
      defaultValue: "true",
    },
    href: {
      control: "string",
      defaultValue: "/",
    },
    isSkeleton: {
      control: "boolean",
      defaultValue: false,
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1543%3A5965",
    },
  },
} as ComponentMeta<typeof ListDashboard>;

const Template: ComponentStory<typeof ListDashboard> = (args) => (
  <div className="m-24">
    <ListDashboard {...args} />
  </div>
);

export const DashboardList = Template.bind({});

export const SkeletonScreen = Template.bind({});
SkeletonScreen.args = {
  isSkeleton: true,
};
