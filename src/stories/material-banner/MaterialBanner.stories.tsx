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
      title: "De uadskillelige",
      description: "Simone de Beauvoir",
      isLiked: false,
      material: {
        url: "images/book_cover_1.jpg",
        animate: true,
        size: "medium",
      },
    },
    {
      title: "Den lille bog om dansk design",
      description: "Af Marie Hugsted",
      isLiked: false,
      material: {
        url: "images/book_cover_2.jpg",
        animate: true,
        size: "medium",
      },
    },
    {
      title: "Audrey Hepburn",
      description: "Isabel Sánchez Vegara",
      isLiked: true,
      material: {
        url: "images/book_cover_3.jpg",
        animate: true,
        size: "medium",
      },
    },
    {
      title: "Døgnkioskmennesket",
      description: "Sayaka Murata",
      isLiked: false,
      material: {
        url: "images/book_cover_4.jpg",
        animate: true,
        size: "medium",
      },
    },
    {
      title: "Experiment with photosynthesis",
      description: "Søren Rasmussen",
      isLiked: false,
      material: {
        url: "images/book_cover_5.jpg",
        animate: true,
        size: "medium",
      },
    },
    {
      title: "Sauna",
      description: "Af Anton M. Berg",
      isLiked: false,
      material: {
        url: "images/book_cover_6.jpg",
        animate: true,
        size: "medium",
      },
    },
    {
      title: "De uadskillelige",
      description: "Simone de Beauvoir",
      isLiked: false,
      material: {
        url: "images/book_cover_1.jpg",
        animate: true,
        size: "medium",
      },
    },
    {
      title: "Den lille bog om dansk design",
      description: "Af Marie Hugsted",
      isLiked: false,
      material: {
        url: "images/book_cover_2.jpg",
        animate: true,
        size: "medium",
      },
    },
  ],
  linkFilters: [
    {
      title: "Bob Dylan 80 år",
      href: "/",
      counter: "8",
    },
    {
      title: "Familien Bridgerton",
      href: "/",
      counter: "24",
    },
    {
      title: "Bøger til din ferie",
      href: "/",
      counter: "48",
    },
    {
      title: "Læs dig gennem Danmark",
      href: "/",
      counter: "16",
    },
  ],
  button: undefined,
  showLinkfilters: true,
};
