import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import DateRange, { DateRangeProps } from "./DateRange";

export default {
  title: "Library / Date range",
  component: DateRange,
  decorators: [withDesign],
  argTypes: {
    open: {
      name: "Open calendar",
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7605%3A54868&mode=design&t=MoXpQuI4TAXRxRDe-1",
    },
    layout: "padded",
  },
} as ComponentMeta<typeof DateRange>;

const Template: ComponentStory<typeof DateRange> = (args: DateRangeProps) => (
  <DateRange {...args} />
);

export const Closed = Template.bind({});

export const Open = Template.bind({});
Open.args = {
  open: true,
};
