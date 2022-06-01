import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultTitle } from "./SearchResultTitle";

export default {
  title: "Components / Search Result Title",
  component: SearchResultTitle,
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
    total: {
      control: { type: "text" },
      defaultValue: "3.576",
    },
  },
} as ComponentMeta<typeof SearchResultTitle>;

const Template: ComponentStory<typeof SearchResultTitle> = (args) => {
  return <SearchResultTitle {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
