import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import DateCalendar from "./DateCalendar";

export default {
  title: "Library / Date calendar",
  component: DateCalendar,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7605%3A54868&mode=design&t=MoXpQuI4TAXRxRDe-1",
    },
    layout: "padded",
  },
} as ComponentMeta<typeof DateCalendar>;

const Template: ComponentStory<typeof DateCalendar> = () => <DateCalendar />;

export const Default = Template.bind({});
