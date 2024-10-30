import { Meta, StoryFn } from "@storybook/react";

import { PauseReservation } from "./PauseReservation";

export default {
  title: "Library / Pause reservation",
  component: PauseReservation,

  argTypes: {
    isChecked: {
      defaultValue: true,
    },
    pauseText: {
      control: "text",
      defaultValue: "Sæt fysiske reserveringer på pause",
    },
    isPausedtext: {
      control: "text",
      defaultValue: "Dine fysiske reserveringer er på pause",
    },
    dates: {
      control: "text",
      defaultValue: "20.09.2021 - 12.10.2021",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=607%3A35282",
    },
  },
} as Meta<typeof PauseReservation>;

const Template: StoryFn<typeof PauseReservation> = (args) => (
  <PauseReservation {...args} />
);

export const PauseReservationExample = Template.bind({});
PauseReservationExample.args = {
  isChecked: false,
};
