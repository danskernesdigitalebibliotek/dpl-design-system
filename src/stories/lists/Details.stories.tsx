import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { StoryPlaceholder } from "../story-placeholder/StoryPlaceholder";
import { addMissingLabel } from "../story-placeholder/tools";

export default {
  title: addMissingLabel("Components / Lists"),
  component: StoryPlaceholder,
  decorators: [withDesign],
  argTypes: {
    name: {
      defaultValue: '"Details" list',
    }
  },
  parameters: {},
} as ComponentMeta<typeof StoryPlaceholder>;

export const DetailsList: ComponentStory<typeof StoryPlaceholder> = StoryPlaceholder.bind({});
DetailsList.storyName = addMissingLabel("Details");
