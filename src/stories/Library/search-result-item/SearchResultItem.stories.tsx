import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SearchResultItem } from "./SearchResultItem";

export default {
  title: "Library / Search Result Item",
  component: SearchResultItem,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4557%3A15899",
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
    horizontalTermLineData: {
      control: { type: "object" },
      defaultValue: {
        title: "Nr. 3",
        subTitle: "i serien",
        linkList: [
          {
            text: "Små mennesker, store drømme",
            url: "/",
          },
        ],
      },
    },
    availabilityLabels: {
      // The control is disabled because we use stories to explore different availability label counts.
      control: { type: "null" },
      defaultValue: 3,
    },
  },
} as ComponentMeta<typeof SearchResultItem>;

const Template: ComponentStory<typeof SearchResultItem> = (args) => {
  return <SearchResultItem {...args} />;
};

export const Item = Template.bind({});
Item.args = {};

export const ContentOverload = Template.bind({});
ContentOverload.args = {
  title:
    "Audrey Hepburn Audrey Hepburn Audrey Hepburn Audrey Hepburn Audrey Hepburn Audrey Hepburn Audrey Hepburn Audrey Hepburn Audrey Hepburn Audrey Hepburn Audrey Hepburn Audrey Hepburn",
  author: "Sánchez Vegara, Amaia Arrazola, Sánchez Vegara, et al.",
  availabilityLabels: 25,
};
