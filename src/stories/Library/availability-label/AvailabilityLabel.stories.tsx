import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import AvailabilityLabel from "./AvailabilityLabel";

export default {
  title: "Library / Availability Label",
  component: AvailabilityLabel,
  decorators: [withDesign],
  argTypes: {
    manifestationType: {
      name: "Manifestation Type",
      options: ["Bog", "Ebog", "Lydbog (net)", "Lydbog (cd-mp3)", undefined],
      control: "radio",
    },
    availability: {
      name: "Availability",
      options: ["Hjemme", "Online", "Udlånt"],
      control: "radio",
    },
    status: {
      name: "Status",
      options: ["available", "unavailable", "selected"],
      control: "radio",
    },
    quantity: {
      name: "Quantity",
      control: "number",
    },
    button: {
      name: "Button",
      control: "boolean",
    },
  },
  parameters: {},
} as ComponentMeta<typeof AvailabilityLabel>;

const Template: ComponentStory<typeof AvailabilityLabel> = (args) => (
  <AvailabilityLabel {...args} />
);

export const Available = Template.bind({});
Available.args = {
  manifestationType: "Bog",
  availability: "Hjemme",
  status: "available",
  button: true,
};

export const Selected = Template.bind({});
Selected.args = {
  manifestationType: "Ebog",
  availability: "Online",
  status: "selected",
  button: true,
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  manifestationType: "Lydbog (cd-mp3)",
  availability: "Udlånt",
  status: "unavailable",
  button: true,
};

export const WithoutManifestationType = Template.bind({});
WithoutManifestationType.args = {
  // manifestation is defined here as undefined to perserve the controls order
  manifestationType: undefined,
  availability: "Udlånt",
  status: "unavailable",
  button: true,
};
