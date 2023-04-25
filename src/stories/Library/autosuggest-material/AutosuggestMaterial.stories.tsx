import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import {
  AutosuggestMaterial,
  AutosuggestMaterialProps,
} from "./AutosuggestMaterial";

const autosuggestMaterialSuggestions = [
  {
    cover: "images/book_cover_1.jpg",
    title: "De uadskillelige",
    author: "Simone De Beauvoir",
    year: "1954",
  },
  {
    cover: "images/book_cover_2.jpg",
    title: "Den lille bog om dansk design",
    author: "Marie Hugsted",
    year: "2018",
  },
  {
    cover: "images/book_cover_3.jpg",
    title: "Audrey Hepburn",
    author: "Maria Isabel Sanchez Vegara",
    year: "2018",
  },
];

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
