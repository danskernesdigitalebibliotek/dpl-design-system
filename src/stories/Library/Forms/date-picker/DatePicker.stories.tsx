import { StoryFn, Meta } from "@storybook/react-webpack5";

import DatePicker from "./DatePicker";

export default {
  title: "Library / Forms / DatePicker",
  component: DatePicker,
  argTypes: {
    locale: {
      control: "select",
      options: ["en", "da"],
    },
  },
  args: {
    locale: "en",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7605%3A54868&mode=design&t=MoXpQuI4TAXRxRDe-1",
    },
    layout: "padded",
  },
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
