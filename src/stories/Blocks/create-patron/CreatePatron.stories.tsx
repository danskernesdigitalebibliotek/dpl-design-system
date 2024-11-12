import { StoryFn } from "@storybook/react";
import CreatePatron, { CreatePatronProps } from "./CreatePatron";

export default {
  title: "Blocks / Create Patron",
  component: CreatePatron,
  argTypes: {
    headline: {
      name: "Title",
      control: { type: "text" },
    },
  },
  args: {
    headline: "Register as patron",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=14631%3A36424&mode=design&t=kNDJGSba8OVIdnRx-1",
    },
  },
};

const Template: StoryFn<typeof CreatePatron> = (args: CreatePatronProps) => (
  <CreatePatron {...args} />
);

export const Default = Template.bind({});
