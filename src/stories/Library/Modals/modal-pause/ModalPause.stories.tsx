import { Meta, StoryFn } from "@storybook/react";

import { ModalPause } from "./ModalPause";

export default {
  title: "Library / Modals / Pause",
  component: ModalPause,
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2137%3A14335",
    },
  },
} as Meta<typeof ModalPause>;

const Template: StoryFn<typeof ModalPause> = (args) => <ModalPause {...args} />;

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
