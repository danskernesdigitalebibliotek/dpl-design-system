import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CardListItem } from "./CardListItem";
import { CardListItemSkeleton } from "./CardListItemSkeleton";

export default {
  title: "Library / Card List Item",
  component: CardListItem,
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
} as ComponentMeta<typeof CardListItem>;

export const Item: ComponentStory<typeof CardListItem> = (args) => {
  return <CardListItem {...args} />;
};

export const ContentOverload = Item.bind({});
ContentOverload.args = {
  title:
    "En roman om Jon og hans breve til sin gravide kone, da han opholdt sig i en grotte hen over vinteren og forberedte hendes ankomst og de nye tider (dansk)",
  author: "Sánchez Vegara, Amaia Arrazola, Sánchez Vegara, et al.",
  availabilityLabels: 25,
};

export const SkeletonItem: ComponentStory<typeof CardListItemSkeleton> = () => {
  return <CardListItemSkeleton />;
};
