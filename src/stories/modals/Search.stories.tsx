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
      defaultValue: '"Modal with search"',
    }
  },
  parameters: {},
} as ComponentMeta<typeof MissingStory>;

export const ModalSearch: ComponentStory<typeof MissingStory> = MissingStory.bind({});
ModalSearch.storyName = addMissingLabel("Search");
