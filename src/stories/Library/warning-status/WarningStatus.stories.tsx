import { Meta, StoryFn } from "@storybook/react";

import { WarningStatus } from "./WarningStatus";

export default {
  title: "Library / Warning Status",
  component: WarningStatus,
  argTypes: {},
  parameters: {},
} as Meta<typeof WarningStatus>;

const Template: StoryFn<typeof WarningStatus> = (args) => (
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
