import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ContentListItemStacked from "./ContentListItemStacked";

export default {
  title: "Library / Content List Item Stacked",
  component: ContentListItemStacked,
  decorators: [withDesign],
  argTypes: {
    date: {
      defaultValue: "01 Feb 2023",
      control: { type: "text" },
    },
    time: {
      defaultValue: "19:30 - 21:00",
      control: { type: "text" },
    },
    href: {
      defaultValue: "/",
      control: { type: "text" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=13701-3367&mode=design&t=yJCbrISIEY34WPBj-4",
    },
    layout: "full",
  },
} as ComponentMeta<typeof ContentListItemStacked>;

const Template: ComponentStory<typeof ContentListItemStacked> = (args) => (
  <ContentListItemStacked {...args} />
);

export const Default = Template.bind({});
