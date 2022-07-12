import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { PauseReservationComponent } from "./PauseReservationComponent";

export default {
  title: "Library / Pause reservation",
  component: PauseReservationComponent,
  decorators: [withDesign],
  argTypes: {
    isChecked: {
      defaultValue: true,
    },
  },
  parameters: {},
} as ComponentMeta<typeof PauseReservationComponent>;

const Template: ComponentStory<typeof PauseReservationComponent> = (args) => (
  <PauseReservationComponent {...args} />
);

export const PauseReservation = Template.bind({});
PauseReservation.args = {
  isChecked: false,
};
