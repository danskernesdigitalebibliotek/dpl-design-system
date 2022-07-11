import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ModalCTA } from "./ModalCTA";

export default {
  title: "Library / Modals / CTA",
  component: ModalCTA,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11410",
    },
  },
} as ComponentMeta<typeof ModalCTA>;

const Template: ComponentStory<typeof ModalCTA> = (args) => (
  <ModalCTA {...args} />
);

export const Item = Template.bind({});
Item.args = {
  title: "Hov, dit gebyr forhøjes!",
  showModal: true,
};
