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
      defaultValue: '"Details" list',
    }
  },
  parameters: {},
} as ComponentMeta<typeof MissingStory>;

export const DetailsList: ComponentStory<typeof MissingStory> = MissingStory.bind({});
DetailsList.storyName = addMissingLabel("Details");
