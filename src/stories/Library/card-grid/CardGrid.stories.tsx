import { StoryFn, Meta } from "@storybook/react";

import CardGrid from "./CardGrid";
import { card, cardNoImage } from "./card-grid-data";

export default {
  title: "Library / Card grid ('Nyhedskomponent')",
  component: CardGrid,
  argTypes: {
    title: { control: "text" },
    linkText: { control: "text" },
    items: { control: false },
  },
  args: {
    title: "Nyheder",
    linkText: "Se flere nyheder",
    items: [card, cardNoImage, card],
  },
  parameters: {
    design: {
      type: "figma",
      url: "Designsystem",
    },
  },
} as Meta<typeof CardGrid>;

const Template: StoryFn<typeof CardGrid> = (args) => <CardGrid {...args} />;

const Many = Template.bind({});

Many.args = {
  items: [card, cardNoImage, card, card, card, cardNoImage],
};

const Few = Template.bind({});

Few.args = {
  title: undefined,
  linkText: undefined,
  items: [cardNoImage, card, cardNoImage],
};

export { Many, Few };
