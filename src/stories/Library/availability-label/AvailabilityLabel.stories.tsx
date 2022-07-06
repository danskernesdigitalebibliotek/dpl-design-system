import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import React from "react";
import { AvailabilityLabel } from "./AvailabilityLabel";

export default {
  title: "Library / Availability Label",
  component: AvailabilityLabel,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof AvailabilityLabel>;

const Template: ComponentStory<typeof AvailabilityLabel> = (args) => (
  <AvailabilityLabel {...args} />
);

export const Available = Template.bind({});
Available.args = {
  manifestation: "Bog",
  availability: "Hjemme",
  status: "available",
};

export const Selected = Template.bind({});
Selected.args = {
  manifestation: "Ebog",
  availability: "Online",
  status: "selected",
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  manifestation: "Lydbog (cd-mp3)",
  availability: "Udlånt",
  status: "unavailable",
};
