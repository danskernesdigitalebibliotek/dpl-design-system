import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { StatusLabel } from "./StatusLabel";

export default {
  title: "Library / Status Label",
  component: StatusLabel,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof StatusLabel>;

const Template: ComponentStory<typeof StatusLabel> = (args) => (
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
