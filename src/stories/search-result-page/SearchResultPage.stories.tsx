import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultPage } from "./SearchResultPage";

export default {
  title: "Components / Search Result Page",
  component: SearchResultPage,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "harry potter",
    },
    linkName: {
      control: { type: "text" },
      defaultValue: "bibliotekets hjemmeside",
    },
    linkTotalResults: {
      control: { type: "text" },
      defaultValue: "8",
    },
    currentResults: {
      control: { type: "text" },
      defaultValue: "10",
    },
    totalResults: {
      control: { type: "text" },
      defaultValue: "3.576",
    },
  },
} as ComponentMeta<typeof SearchResultPage>;

const Template: ComponentStory<typeof SearchResultPage> = (args) => {
  return <SearchResultPage {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
