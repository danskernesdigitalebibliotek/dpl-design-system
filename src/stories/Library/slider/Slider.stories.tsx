import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Slider from "./Slider";
import Card from "../card/Card";
import ImageCredited from "../image-credited/ImageCredited";

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

const title = "Bøger som har gjort en forskel for romanens udvikling";
const typeTag = "Arrangement";
const dateTag = "06 Dec 2022";
const imageUrl =
  "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image = <ImageCredited src={imageUrl} />;
const placeholderText = "Stine Pilgaard vinder De Gyldne Laurbær";

const cardLarge = (
  <Card
    variant="large"
    title={title}
    typeTag={typeTag}
    dateTag={dateTag}
    image={image}
  />
);

const cardLargeNoImage = (
  <Card
    variant="large"
    title={title}
    typeTag={typeTag}
    dateTag={dateTag}
    placeholderText={placeholderText}
  />
);

export const Many = Template.bind({});
Many.args = {
  items: [cardLarge, cardLargeNoImage, cardLarge, cardLargeNoImage],
};
