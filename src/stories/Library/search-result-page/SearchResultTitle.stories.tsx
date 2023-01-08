import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultTitle } from "./SearchResultTitle";

export default {
  title: "Blocks / Search Result Header Title",
  component: SearchResultTitle,
  decorators: [withDesign],
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
} as ComponentMeta<typeof SearchResultTitle>;

const Template: ComponentStory<typeof SearchResultTitle> = (args) => {
  return <SearchResultTitle {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
