import { Meta, StoryFn } from "@storybook/react-webpack5";

import { Counter } from "./Counter";

export default {
  title: "Library / Counter",
  component: Counter,
  argTypes: {},
  parameters: {},
} as Meta<typeof Counter>;

const Template: StoryFn<typeof Counter> = (args) => <Counter {...args} />;

export const Danger = Template.bind({});
Danger.args = {
  value: 0,
  percentage: 94,
  label: "dage",
  status: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  value: 7,
  percentage: 40,
  label: "dage",
  status: "warning",
};

export const Info = Template.bind({});
Info.args = {
  value: 24,
  percentage: 20,
  label: "dage",
  status: "info",
};

export const Ready = Template.bind({});
Ready.args = {
  percentage: 100,
  label: "klar",
  status: "info",
  isReady: true,
};
