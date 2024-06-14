import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Slider from "./Slider";
import Card from "../card/Card";
import CardImages from "../card/CardImages";

export default {
  title: "Library / Slider",
  component: Slider,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7711-76621",
    },
  },
  argTypes: {
    title: {
      defaultValue: "Inspiration",
      type: "string",
    },
    items: {
      // Disabling controls, as the different variations are added already.
      control: false,
    },
  },
};

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

const image = (
  <CardImages
    src="images/card_original.jpg"
    alternativeSrcs={[
      { name: "x-large", src: "images/card_x_large.jpg" },
      { name: "large", src: "images/card_large.jpg" },
      { name: "medium", src: "images/card_medium.jpg" },
    ]}
  />
);

const card = (
  <Card
    title="Bøger som har gjort en forskel for romanens udvikling"
    typeTag="Nyhed"
    dateTag="06 Dec 2022"
    image={image}
  />
);

const cardNoImage = (
  <Card
    title="Fars legestue, hver onsdag"
    typeTag="Arrangement"
    dateTag="06 Okt - 28 Dec 2022"
    placeholderText="Fri leg for alle aldre"
  />
);

export const Many = Template.bind({});
Many.args = {
  items: [
    card,
    cardNoImage,
    card,
    cardNoImage,
    cardNoImage,
    card,
    cardNoImage,
    card,
    card,
    cardNoImage,
    card,
    cardNoImage,
    card,
    card,
  ],
};
