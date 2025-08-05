import { Meta, StoryFn } from "@storybook/react-webpack5";

import { StatusLabel } from "./StatusLabel";

export default {
  title: "Library / Status Label",
  component: StatusLabel,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as Meta<typeof StatusLabel>;

const Template: StoryFn<typeof StatusLabel> = (args) => (
  <StatusLabel {...args} />
);

export const Danger = Template.bind({});
Danger.args = {
  label: "overskredet",
  status: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "udløber snart",
  status: "warning",
};

export const Info = Template.bind({});
Info.args = {
  label: "Hent senest 01.04.2019",
  status: "info",
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: "Text",
  status: "neutral",
};
