import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MaterialCard } from "./MaterialCard";

export default {
  title: "Atoms / Material - Card",
  component: MaterialCard,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof MaterialCard>;

const Template: ComponentStory<typeof MaterialCard> = (args) => (
  <MaterialCard {...args} />
);

export const MaterialSmall = Template.bind({});
MaterialSmall.args = {
  title: "Søren Rasmussen",
  description: "Experiment with photosynthesis",
  isLiked: false,
  material: {
    url: "images/book_cover_5.jpg",
    animate: false,
    size: "small",
  },
};

export const MaterialLarge = Template.bind({});
MaterialLarge.args = {
  title: "Søren Rasmussen",
  description: "Experiment with photosynthesis",
  isLiked: true,
  material: {
    url: "images/book_cover_5.jpg",
    animate: false,
    size: "large",
  },
};
