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
    totalResults: {
      control: { type: "text" },
      defaultValue: "3.576",
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

    zeroResult: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof SearchResultPage>;

const Template: ComponentStory<typeof SearchResultPage> = (args) => {
  return <SearchResultPage {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
