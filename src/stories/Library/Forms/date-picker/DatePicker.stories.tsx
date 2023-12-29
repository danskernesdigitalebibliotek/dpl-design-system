import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import DatePicker from "./DatePicker";

export default {
  title: "Library / Forms / DatePicker",
  component: DatePicker,
  decorators: [withDesign],
  argTypes: {
    locale: {
      options: ["en", "da"],
      defaultValue: "en",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7605%3A54868&mode=design&t=MoXpQuI4TAXRxRDe-1",
    },
    layout: "padded",
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Default = Template.bind({});
