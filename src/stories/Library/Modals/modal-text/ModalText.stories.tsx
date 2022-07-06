import React from "react";
import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ModalText, textContent } from "./ModalText";

export default {
  title: "Library / Modals / Text",
  component: ModalText,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A11417",
    },
  },
} as ComponentMeta<typeof ModalText>;

const Template: ComponentStory<typeof ModalText> = (args) => (
  <ModalText {...args} />
);

export const Text = Template.bind({});
Text.args = {
  showModal: true,
  title: "Vilkår for brug og opbevaring af Data",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  linkText: "Ikke nu",
  btnLabel: "Giv samtykke",
  textContent,
};
