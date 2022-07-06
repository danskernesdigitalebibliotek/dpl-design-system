import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import React from "react";
import { AutosuggestText, AutosuggestTextProps } from "./AutosuggestText";

export default {
  title: "Library / Autosuggest - Text",
  component: AutosuggestText,
  decorators: [withDesign],
  argTypes: {
    items: {
      name: "Items",
      defaultValue: ["Item one", "Item two"],
      control: { type: "array" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4709%3A24976",
    },
  },
} as ComponentMeta<typeof AutosuggestText>;

const Template: ComponentStory<typeof AutosuggestText> = (
  args: AutosuggestTextProps
) => (
  // apart from SuggestText, everything else is here just for the story context
  // SuggestText style is directly dependent on the header and search field styling
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
          <AutosuggestText {...args} />
        </div>
      </div>
    </div>
    <div className="header__clock">
      <p className="text-body-medium-regular">Context</p>
    </div>
  </header>
);

export const TextSuggestion = Template.bind({});
