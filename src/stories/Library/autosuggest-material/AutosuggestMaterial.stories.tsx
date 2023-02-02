import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import {
  AutosuggestMaterial,
  AutosuggestMaterialProps,
} from "./AutosuggestMaterial";

export default {
  title: "Library / Autosuggest - Material",
  component: AutosuggestMaterial,
  decorators: [withDesign],
  argTypes: {
    items: {
      name: "Items",
      defaultValue: [
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
      ],
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
  // Apart from AutosuggestMaterial, everything else is here just for the story
  // context. AutosuggestMaterial style is directly dependent on the header,
  // search field, and AutosuggestText styling.
  // If you find out this context no longer represents reality, please adjust it.
  <header className="header" style={{ height: "144px" }}>
    <div className="header__logo-desktop">
      <p className="text-body-medium-regular">Context</p>
    </div>
    <div className="header__menu">
      <nav className="header__menu-first">
        <p className="text-body-medium-regular">Context</p>
      </nav>
      <div className="header__menu-second">
        <div className="header__menu-search">
          <input
            className="header__menu-search-input text-body-medium-regular"
            type="text"
            placeholder="This field is here just for context."
          />
          <img
            className="header__menu-search-icon"
            src="icons/basic/icon-search.svg"
            alt="search icon"
          />
          <AutosuggestMaterial {...args} />
        </div>
      </div>
    </div>
    <div className="header__clock">
      <p className="text-body-medium-regular">Context</p>
    </div>
  </header>
);

export const MaterialSuggestion = Template.bind({});
