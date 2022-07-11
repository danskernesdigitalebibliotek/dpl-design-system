import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ListDashboard } from "./ListDashboard";

export default {
  title: "Library / Lists / Dashboard",
  component: ListDashboard,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1543%3A5965",
    },
  },
} as ComponentMeta<typeof ListDashboard>;

const Template: ComponentStory<typeof ListDashboard> = (args) => (
  <ListDashboard {...args} />
);

export const Item1 = Template.bind({});
Item1.args = {
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
};
