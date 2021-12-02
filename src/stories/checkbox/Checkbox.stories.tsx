import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { StoryPlaceholder } from "../story-placeholder/StoryPlaceholder";
import { addMissingLabel } from "../story-placeholder/tools";

export default {
  title: addMissingLabel("Atoms / Checkbox"),
  component: StoryPlaceholder,
  decorators: [withDesign],
  argTypes: {
    name: {
      defaultValue: "Checkbox",
    }
  },
  parameters: {},
} as ComponentMeta<typeof StoryPlaceholder>;


export const Default: ComponentStory<typeof StoryPlaceholder>  = StoryPlaceholder.bind({});

