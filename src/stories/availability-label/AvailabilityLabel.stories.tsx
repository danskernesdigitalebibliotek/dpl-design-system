import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AvailabilityLabel } from "./AvailabilityLabel";

export default {
  title: "Components / Availability Label",
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
  manifestation: "bog",
  availability: "Hjemme",
  status: "available",
};

export const Selected = Template.bind({});
Selected.args = {
  manifestation: "ebog",
  availability: "Online",
  status: "selected",
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  manifestation: "lydbog (cd-mp3)",
  availability: "Udlånt",
  status: "unavailable",
};
