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
  pagefoldProps: {
    inherit: false,
    container: false,
    size: "xsmall",
    classes: "availability-label availability-label--unselected text-label",
    colorClass: "success",
  },
};

export const Selected = Template.bind({});
Selected.args = {
  manifestation: "ebog",
  availability: "Online",
  status: "selected",
  pagefoldProps: {
    inherit: false,
    container: false,
    size: "none",
    classes: "availability-label availability-label--selected text-label",
  },
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  manifestation: "lydbog (cd-mp3)",
  availability: "Udlånt",
  status: "unavailable",
  pagefoldProps: {
    inherit: false,
    container: false,
    size: "xsmall",
    classes: "availability-label availability-label--unselected text-label",
    colorClass: "alert",
  },
};
