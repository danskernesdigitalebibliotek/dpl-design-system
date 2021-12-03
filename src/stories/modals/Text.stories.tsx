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
      defaultValue: '"Modal with text"',
    }
  },
  parameters: {},
} as ComponentMeta<typeof MissingStory>;

export const ModalText: ComponentStory<typeof MissingStory> = MissingStory.bind({});
ModalText.storyName = addMissingLabel("Text");
