import { StoryFn } from "@storybook/react";

import clsx from "clsx";
import { Autosuggest, AutosuggestProps } from "./Autosuggest";
import AutosuggestMaterialStories from "../../Library/autosuggest-material/AutosuggestMaterial.stories";
import AutosuggestTextStories from "../../Library/autosuggest-text/AutosuggestText.stories";
import { autosuggestMaterialSuggestions } from "../../Library/autosuggest-material/helper";

export default {
  title: "Blocks / Autosuggest",
  component: Autosuggest,
  argTypes: {
    ...AutosuggestMaterialStories.argTypes,
    ...AutosuggestTextStories.argTypes,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4709%3A24976",
    },
  },
};

const Template: StoryFn<typeof Autosuggest> = (args: AutosuggestProps) => (
  // Inline styling should be avoided, but this is not really a part of the
  // component - rather, a fix, to make sure the autosuggests look correct,
  // even when they're not in the menu structure.
  <div className="this-is-just-for-storybook" style={{ position: "relative" }}>
    <Autosuggest {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

const getStoryArguments = (suggestions: number) => ({
  args: {
    materialSuggestions: autosuggestMaterialSuggestions.slice(0, suggestions),
    classes: clsx({
      "autosuggest__material-item--two": suggestions === 2,
      "autosuggest__material-item--one": suggestions === 1,
    }),
  },
});

export const TwoMaterials = Template.bind({});
TwoMaterials.args = getStoryArguments(2).args;

export const OneMaterial = Template.bind({});
OneMaterial.args = getStoryArguments(1).args;
