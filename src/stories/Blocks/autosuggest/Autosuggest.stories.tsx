import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import materialSuggestions from "../../Library/autosuggest-material/material-suggestions";
import { Autosuggest, AutosuggestProps } from "./Autosuggest";

export default {
  title: "Blocks / Autosuggest",
  component: Autosuggest,
  decorators: [withDesign],
  argTypes: {
    textProps: {
      name: "Text props",
      defaultValue: {
        textSuggestions: ["Item one", "Item two"],
        categoryText: "ebook",
      },
      control: { type: "object" },
    },
    materialProps: {
      name: "Material props",
      defaultValue: materialSuggestions,
      control: { type: "object" },
    },
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
