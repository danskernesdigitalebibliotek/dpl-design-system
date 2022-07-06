import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ModalDetails } from "./ModalDetails";

export default {
  title: "Library / Modals / Details",
  component: ModalDetails,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2146%3A13292",
    },
  },
} as ComponentMeta<typeof ModalDetails>;

const Template: ComponentStory<typeof ModalDetails> = (args) => (
  <ModalDetails {...args} />
);

export const Item = Template.bind({});
Item.args = {
  title: "Divas, dames & daredevils: Lost Heroines of Golden Age Comics",
  author: "Mike Madrid",
  type: "bog",
  showWarning: true,
  showModal: true,
};
