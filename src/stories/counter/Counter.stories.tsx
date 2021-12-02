import React from "react";
import { ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { StoryPlaceholder } from "../storyplaceholder/StoryPlaceholder";

export default {
  title: "Atoms / Counter",
  component: StoryPlaceholder,
  decorators: [withDesign],
  argTypes: {
    name: {
      defaultValue: "Counter",
    }
  },
  parameters: {},
} as ComponentMeta<typeof StoryPlaceholder>;

export const Default = StoryPlaceholder.bind({});

