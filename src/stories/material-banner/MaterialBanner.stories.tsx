import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MaterialBanner } from "./MaterialBanner";

export default {
  title: "Atoms / Material - Banner",
  component: MaterialBanner,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof MaterialBanner>;

const Template: ComponentStory<typeof MaterialBanner> = (args) => (
  <MaterialBanner {...args} />
);

export const Item = Template.bind({});
Item.args = {
  title: "Nyt på hylderne",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cards: [
    {
      title: "Lone Als Egebo (2021)",
      description: "Mikrobiologibogen",
      isLiked: false,
      material: {
        url: "images/book_cover_1.jpg",
        animate: true,
        size: "large",
      },
    },
    {
      title: "Lone Als Egebo (2021)",
      description: "Mikrobiologibogen",
      isLiked: false,
      material: {
        url: "images/book_cover_2.jpg",
        animate: true,
        size: "large",
      },
    },
    {
      title: "Lone Als Egebo (2021)",
      description: "Mikrobiologibogen",
      isLiked: true,
      material: {
        url: "images/book_cover_3.jpg",
        animate: true,
        size: "large",
      },
    },
    {
      title: "Lone Als Egebo (2021)",
      description: "Mikrobiologibogen",
      isLiked: false,
      material: {
        url: "images/book_cover_4.jpg",
        animate: true,
        size: "large",
      },
    },
  ],
  button: undefined,
  links: [],
  showLinkfilters: true,
};
