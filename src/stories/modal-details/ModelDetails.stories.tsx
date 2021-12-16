import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModelDetails } from "./ModelDetails";

export default {
  title: "Components / Model - Details",
  component: ModelDetails,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ModelDetails>;

const Template: ComponentStory<typeof ModelDetails> = (args) => (
  <ModelDetails {...args} />
);

export const Item = Template.bind({});
Item.args = {
  title: "Divas, dames & daredevils: Lost Heroines of Golden Age Comi...",
  author: "Mike Madrid",
  type: "bog",
  showWarning: true,
};
