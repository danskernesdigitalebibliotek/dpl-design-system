import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultElement } from "./SearchResultElement";

export default {
  title: "Components / Search Result Element",
  component: SearchResultElement,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4557%3A15899",
    },
  },
  argTypes: {
    heartFill: {
      control: "boolean",
      defaultValue: false,
    },
    title: {
      control: { type: "text" },
      defaultValue: "Audrey Hepburn",
    },
    author: {
      control: { type: "text" },
      defaultValue: "Sánchez Vegara, Amaia Arrazola",
    },
    year: {
      control: { type: "text" },
      defaultValue: "2018",
    },
    categoryScore: {
      control: { type: "text" },
      defaultValue: "3",
    },
    series: {
      control: { type: "text" },
      defaultValue: "Små mennesker, store drømme",
    },
  },
} as ComponentMeta<typeof SearchResultElement>;

const Template: ComponentStory<typeof SearchResultElement> = (args) => {
  return <SearchResultElement {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
