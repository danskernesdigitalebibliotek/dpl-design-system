import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ModalPause } from "./ModalPause";

export default {
  title: "Library / Modals / Pause",
  component: ModalPause,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A14335",
    },
  },
} as ComponentMeta<typeof ModalPause>;

const Template: ComponentStory<typeof ModalPause> = (args) => (
  <ModalPause {...args} />
);

export const Pause = Template.bind({});
Pause.args = {
  showModal: true,
  title: "Sæt reserveringer på pause",
  subtitle:
    "Sæt fysiske reserveringer på pause lorem ipsum quod maxime placeat facere possimus",
  textWithLink:
    "Bemærk der kan være en forsinkelse på, hvornår pausen begynder.",
  linkText: "Læs mere",
};
