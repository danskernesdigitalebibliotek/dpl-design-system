import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListDashboard } from "./ListDashboard";

export default {
  title: "Components / List - Dashboard",
  component: ListDashboard,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ListDashboard>;

const Template: ComponentStory<typeof ListDashboard> = (args) => (
  <ListDashboard {...args} />
);

export const Item1 = Template.bind({});
Item1.args = {
  label: {
    label: "overskrevet",
    status: "danger",
  },
  number: {
    label: 2,
    status: "danger",
  },
  title: "Afleveret for sent",
  showDot: true,
};
