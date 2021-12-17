import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ModalCTA } from "./ModalCTA";

export default {
  title: "Components / Modal - CTA",
  component: ModalCTA,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ModalCTA>;

const Template: ComponentStory<typeof ModalCTA> = (args) => (
  <ModalCTA {...args} />
);

export const Item = Template.bind({});
Item.args = {
  title: "Hov, dit gebyr forhøjes!",
  showModal: true,
};
