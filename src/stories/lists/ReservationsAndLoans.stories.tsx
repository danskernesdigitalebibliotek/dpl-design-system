import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MissingStory } from "../missing-story/MissingStory";
import { addMissingLabel } from "../missing-story/tools";

export default {
  title: addMissingLabel("Components / Lists"),
  component: MissingStory,
  decorators: [withDesign],
  argTypes: {
    name: {
      defaultValue: '"Reservations and Loans" list',
    }
  },
  parameters: {},
} as ComponentMeta<typeof MissingStory>;

export const ReservationsAndLoansList: ComponentStory<typeof MissingStory> = MissingStory.bind({});
ReservationsAndLoansList.storyName = addMissingLabel("Reservations and Loans");
