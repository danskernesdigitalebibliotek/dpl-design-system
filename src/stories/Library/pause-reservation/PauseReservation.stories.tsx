import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { PauseReservation } from "./PauseReservation";

export default {
  title: "Library / Pause reservation",
  component: PauseReservation,
  decorators: [withDesign],
  argTypes: {
    isChecked: {
      defaultValue: true,
    },
  },
  parameters: {},
} as ComponentMeta<typeof PauseReservation>;

const Template: ComponentStory<typeof PauseReservation> = (args) => (
  <PauseReservation {...args} />
);

export const PauseReservationExample = Template.bind({});
PauseReservationExample.args = {
  isChecked: false,
};
