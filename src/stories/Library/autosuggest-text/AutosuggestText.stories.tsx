import { Meta, StoryFn } from "@storybook/react";

import { AutosuggestText, AutosuggestTextProps } from "./AutosuggestText";

export default {
  title: "Library / Autosuggest - Text",
  component: AutosuggestText,

  argTypes: {
    textSuggestions: {
      name: "Text suggestions",
      defaultValue: ["Item one (author)", "Item two (work)"],
      control: { type: "object" },
    },
    categoryText: {
      name: "Category text",
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
} as Meta<typeof AutosuggestText>;

const Template: StoryFn<typeof AutosuggestText> = (
  args: AutosuggestTextProps,
) => (
  <div className="header__menu-search">
    <ul className="autosuggest pb-16">
      <AutosuggestText {...args} />
    </ul>
  </div>
);

export const Default = Template.bind({});

export const MultipleLines = Template.bind({});
MultipleLines.args = {
  textSuggestions: [
    "Lorem ipsum hal de pretty clanging scales, because seldom they have seemed seven over the top lorem ipsum hal de pretty clanging scales, because seldom they have seemed seven over the top lorem ipsum hal de pretty clanging scales, because seldom they have seemed (work)",
    "Item two (work)",
  ],
};

export const WithCategoryTag = Template.bind({});
WithCategoryTag.args = {
  textSuggestions: ["Item one", "Item two"],
  categoryText: "Author",
};
