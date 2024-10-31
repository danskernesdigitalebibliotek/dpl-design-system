import { Meta, StoryFn } from "@storybook/react";
import { SearchResultTitle } from "./SearchResultTitle";

export default {
  title: "Blocks / Search Result Header Title",
  component: SearchResultTitle,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    totalResults: {
      control: { type: "number" },
    },
    zeroResult: {
      description: "Do we have zero results?",
      control: { type: "boolean" },
    },
    isLoading: {
      description: "Are we in a loading state?",
      control: { type: "boolean" },
    },
  },
  args: {
    title: "harry potter",
    totalResults: 100,
    zeroResult: false,
    isLoading: false,
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
