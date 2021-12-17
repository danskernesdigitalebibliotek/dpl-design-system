import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalDetails } from "./ModalDetails";

export default {
  title: "Components / Modal - Details",
  component: ModalDetails,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ModalDetails>;

const Template: ComponentStory<typeof ModalDetails> = (args) => (
  <ModalDetails {...args} />
);

export const Item = Template.bind({});
Item.args = {
  title: "Divas, dames & daredevils: Lost Heroines of Golden Age Comi...",
  author: "Mike Madrid",
  type: "bog",
  showWarning: true,
  showModal: true,
};
