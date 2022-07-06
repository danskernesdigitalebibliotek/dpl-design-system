import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import React from "react";
import { WarningStatus } from "./WarningStatus";

export default {
  title: "Library / Warning Status",
  component: WarningStatus,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof WarningStatus>;

const Template: ComponentStory<typeof WarningStatus> = (args) => (
  <WarningStatus {...args} />
);

export const Description = Template.bind({});
Description.args = {
  description:
    "Derfor har du i øjeblikket ikke mulighed for at låne eller reservere materialer fra biblioteket",
  url: window.location.href,
};

export const TitleAndDescription = Template.bind({});
TitleAndDescription.args = {
  title: "Du skylder i alt",
  description:
    "Derfor har du i øjeblikket ikke mulighed for at låne eller reservere materialer fra biblioteket",
  url: window.location.href,
};

export const DescriptionAndButton = Template.bind({});
DescriptionAndButton.args = {
  description: "Du skylder i alt",
  owes: "256",
  button: {
    title: "se mere",
    url: window.location.href,
  },
};
