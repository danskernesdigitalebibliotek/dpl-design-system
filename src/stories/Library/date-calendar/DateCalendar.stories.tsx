import { StoryFn, Meta } from "@storybook/react";

import DateCalendar from "./DateCalendar";

export default {
  title: "Library / DateCalendar",
  component: DateCalendar,

  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7605%3A54868&mode=design&t=MoXpQuI4TAXRxRDe-1",
    },
    layout: "padded",
  },
} as Meta<typeof DateCalendar>;

const Template: StoryFn<typeof DateCalendar> = () => <DateCalendar />;

export const Default = Template.bind({});
