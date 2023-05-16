import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import {
  AutosuggestMaterial,
  AutosuggestMaterialProps,
} from "./AutosuggestMaterial";
import { autosuggestMaterialSuggestions } from "./helper";

export default {
  title: "Library / Autosuggest - Material",
  component: AutosuggestMaterial,
  decorators: [withDesign],
  argTypes: {
    materialSuggestions: {
      name: "Material suggestions",
      defaultValue: autosuggestMaterialSuggestions,
      control: { type: "array" },
    },
    classes: {
      name: "Classes",
      defaultValue: undefined,
      control: { type: "text" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4709%3A24976",
    },
  },
} as ComponentMeta<typeof AutosuggestMaterial>;

const Template: ComponentStory<typeof AutosuggestMaterial> = (
  args: AutosuggestMaterialProps
) => (
  <div className="header__menu-search">
    <ul className="autosuggest pb-16">
      <AutosuggestMaterial {...args} />
    </ul>
  </div>
);

export const Default = Template.bind({});

export const TwoItems = Template.bind({});
TwoItems.args = {
  materialSuggestions: autosuggestMaterialSuggestions.slice(0, 2),
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  materialSuggestions: autosuggestMaterialSuggestions.slice(0, 1),
};
