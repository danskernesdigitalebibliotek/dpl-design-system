import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Autosuggest, AutosuggestProps } from "./Autosuggest";
import AutosuggestMaterialStories, {
  autosuggestMaterialSuggestions,
} from "../../Library/autosuggest-material/AutosuggestMaterial.stories";
import AutosuggestTextStories from "../../Library/autosuggest-text/AutosuggestText.stories";

export default {
  title: "Blocks / Autosuggest",
  component: Autosuggest,
  decorators: [withDesign],
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

const Template: ComponentStory<typeof Autosuggest> = (
  args: AutosuggestProps
) => (
  // Apart from <Autosuggest />, everything else is here just for the story
  // context. The autosuggest styling is directly dependent on the header component,
  // Please keep up to date with Header.tsx
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
          <Autosuggest {...args} />
        </div>
      </div>
    </div>
    <div className="header__clock">
      <p className="text-body-medium-regular">Context</p>
    </div>
  </header>
);

export const Default = Template.bind({});

const getStoryArguments = (suggestions: number) => {
  return {
    ...AutosuggestTextStories.argTypes,
    materialSuggestions: {
      ...{ ...AutosuggestMaterialStories.argTypes?.materialSuggestions },
      defaultValue: autosuggestMaterialSuggestions.slice(0, suggestions),
    },
    classes: {
      ...{ ...AutosuggestMaterialStories.argTypes?.classes },
      defaultValue: `autosuggest__material-item--${
        suggestions === 2 ? "two" : ""
      }${suggestions === 1 ? "one" : ""}`,
    },
  };
};

export const TwoMaterials = Template.bind({});
TwoMaterials.argTypes = getStoryArguments(2);

export const OneMaterial = Template.bind({});
OneMaterial.argTypes = getStoryArguments(1);
