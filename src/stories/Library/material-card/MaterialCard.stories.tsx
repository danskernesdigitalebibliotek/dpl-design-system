import { Meta, StoryFn } from "@storybook/react";

import { MaterialCard } from "./MaterialCard";

export default {
  title: "Library / Materials / Card",
  component: MaterialCard,
  // We disable the isChecked control, since it is not possible to
  // get the states from the React component to work with Storybook controls.
  argTypes: {
    isLiked: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {},
} as Meta<typeof MaterialCard>;

const Template: StoryFn<typeof MaterialCard> = (args) => (
  <MaterialCard {...args} />
);

export const MaterialSmall = Template.bind({});
MaterialSmall.args = {
  title: "Søren Rasmussen",
  description: "Experiment with photosynthesis",
  isLiked: false,
  cover: {
    src: "images/book_cover_5.jpg",
    animate: false,
    size: "small",
  },
};

export const MaterialLarge = Template.bind({});
MaterialLarge.args = {
  title: "Søren Rasmussen",
  description: "Experiment with photosynthesis",
  isLiked: true,
  cover: {
    src: "images/book_cover_5.jpg",
    animate: false,
    size: "medium",
  },
};
