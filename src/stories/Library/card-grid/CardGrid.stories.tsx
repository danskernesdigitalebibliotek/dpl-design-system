import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import CardGrid from "./CardGrid";
import Card from "../card/Card";
import ImageCredited from "../image-credited/ImageCredited";

const imageUrl =
  "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image = <ImageCredited src={imageUrl} />;

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

export default {
  title: "Library / Card grid ('Nyhedskomponent')",
  component: CardGrid,
  decorators: [withDesign],
  argTypes: {
    title: {
      defaultValue: "Nyheder",
    },
    linkText: {
      defaultValue: "Se flere nyheder",
    },
    items: {
      // Disabling controls, as the different card variants are added already.
      control: false,
      defaultValue: [card, cardNoImage, card],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "Designsystem",
    },
  },
} as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = (args) => (
  <CardGrid {...args} />
);

const Many = Template.bind({});

Many.args = {
  items: [card, cardNoImage, card, card, card, cardNoImage],
};

const Few = Template.bind({});

Few.args = {
  title: undefined,
  linkText: undefined,
};

export { Many, Few };
