import { Meta, StoryFn } from "@storybook/react";
import { SearchResultTitle } from "./SearchResultTitle";

export default {
  title: "Blocks / Search Result Header Title",
  component: SearchResultTitle,

  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "harry potter",
    },
    totalResults: {
      control: { type: "number" },
      defaultValue: 100,
    },
    zeroResult: {
      description: "Do we have zero results?",
      control: { type: "boolean" },
      defaultValue: false,
    },
    isLoading: {
      description: "Are we in a loading state?",
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as Meta<typeof SearchResultTitle>;

const Template: StoryFn<typeof SearchResultTitle> = (args) => {
  return <SearchResultTitle {...args} />;
};

export const Item = Template.bind({});
Item.args = {};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const ZeroResults = Template.bind({});
ZeroResults.args = {
  zeroResult: true,
};
