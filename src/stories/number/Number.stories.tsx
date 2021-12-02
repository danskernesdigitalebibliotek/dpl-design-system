import React from "react";
import { ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { StoryPlaceholder } from "../storyplaceholder/StoryPlaceholder";

export default {
  title: "Atoms / Number",
  component: StoryPlaceholder,
  decorators: [withDesign],
  argTypes: {
    name: {
      defaultValue: "Number",
    }
  },
  parameters: {},
} as ComponentMeta<typeof StoryPlaceholder>;

export const Default = StoryPlaceholder.bind({});

