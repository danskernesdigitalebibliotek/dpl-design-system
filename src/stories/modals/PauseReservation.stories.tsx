import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MissingStory } from "../missing-story/MissingStory";
import { addMissingLabel } from "../missing-story/tools";

export default {
  title: addMissingLabel("Components / Modals"),
  component: MissingStory,
  decorators: [withDesign],
  argTypes: {
    name: {
      defaultValue: '"Modal with reservation pause"',
    }
  },
  parameters: {},
} as ComponentMeta<typeof MissingStory>;

export const ModalReservationPause: ComponentStory<typeof MissingStory> = MissingStory.bind({});
ModalReservationPause.storyName = addMissingLabel("Reservation Pause");
