import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import React from "react";
import { Number } from "./Number";

export default {
  title: "Library / Number",
  component: Number,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof Number>;

const Template: ComponentStory<typeof Number> = (args) => <Number {...args} />;

export const Danger = Template.bind({});
Danger.args = {
  label: 2,
  status: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  label: 2,
  status: "warning",
};

export const Info = Template.bind({});
Info.args = {
  label: 2,
  status: "info",
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: 2,
  status: "neutral",
};
