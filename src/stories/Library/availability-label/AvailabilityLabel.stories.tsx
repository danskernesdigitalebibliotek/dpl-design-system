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
      control: { disable: true },
    },
    availability: {
      name: "Availability",
      options: ["Hjemme", "Online", "Udlånt"],
      control: { disable: true },
    },
    status: {
      name: "Status",
      options: ["available", "unavailable", "selected"],
      control: { disable: true },
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
};

export const Selected = Template.bind({});
Selected.args = {
  manifestationType: "Ebog",
  availability: "Online",
  status: "selected",
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  manifestationType: "Lydbog (cd-mp3)",
  availability: "Udlånt",
  status: "unavailable",
};

export const WithoutManifestationType = Template.bind({});
WithoutManifestationType.args = {
  // manifestation is defined here as undefined to perserve the controls order
  manifestationType: undefined,
  availability: "Udlånt",
  status: "unavailable",
};
