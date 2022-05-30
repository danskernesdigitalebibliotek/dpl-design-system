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
    },
    title: {
      type: { name: "string" },
    },
    author: {
      type: { name: "string" },
    },
    year: {
      type: { name: "string" },
    },
    categoryScore: {
      type: { name: "string" },
    },
    series: {
      type: { name: "string" },
    },
  },
} as ComponentMeta<typeof SearchResultElement>;

const Template: ComponentStory<typeof SearchResultElement> = (args) => {
  return <SearchResultElement {...args} />;
};

export const Item = Template.bind({});
Item.args = {
  heartFill: false,
  title: "Audrey Hepburn",
  author: "Sánchez Vegara, Amaia Arrazola",
  year: "2018",
  categoryScore: "3",
  series: "Små mennesker, store drømme",
};
