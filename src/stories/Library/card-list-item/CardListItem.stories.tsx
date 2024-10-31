import { Meta, StoryFn } from "@storybook/react";
import { CardListItem } from "./CardListItem";
import { CardListItemSkeleton } from "./CardListItemSkeleton";

export default {
  title: "Library / Card List Item",
  component: CardListItem,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4557%3A15899",
    },
  },
  argTypes: {
    heartFill: { control: "boolean" },
    title: { control: { type: "text" } },
    author: { control: { type: "text" } },
    year: { control: { type: "text" } },
    horizontalTermLineData: { control: { type: "object" } },
    availabilityLabels: { control: { type: "number" } },
  },
  args: {
    heartFill: false,
    title: "Audrey Hepburn",
    author: "Sánchez Vegara, Amaia Arrazola",
    year: "2018",
    horizontalTermLineData: {
      title: "Nr. 3",
      subTitle: "i serien",
      linkList: [
        {
          text: "Små mennesker, store drømme",
          url: "/",
        },
      ],
    },
    availabilityLabels: 3,
  },
} as Meta<typeof CardListItem>;

export const Item: StoryFn<typeof CardListItem> = (args) => {
  return <CardListItem {...args} />;
};

export const ContentOverload = Item.bind({});
ContentOverload.args = {
  title:
    "En roman om Jon og hans breve til sin gravide kone, da han opholdt sig i en grotte hen over vinteren og forberedte hendes ankomst og de nye tider (dansk)",
  author: "Sánchez Vegara, Amaia Arrazola, Sánchez Vegara, et al.",
  availabilityLabels: 25,
};

export const SkeletonItem: StoryFn<typeof CardListItemSkeleton> = () => {
  return <CardListItemSkeleton />;
};
