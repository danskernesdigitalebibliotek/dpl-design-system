import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import CardGrid from "./CardGrid";
import { card, cardNoImage } from "./card-grid-data";

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
  items: [cardNoImage, card, cardNoImage],
};

export { Many, Few };
