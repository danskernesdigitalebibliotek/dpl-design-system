import { Meta, StoryFn } from "@storybook/react-webpack5";

import { PauseReservation } from "./PauseReservation";

export default {
  title: "Library / Pause reservation",
  component: PauseReservation,
  argTypes: {
    isChecked: { control: "boolean" },
    pauseText: { control: "text" },
    isPausedtext: { control: "text" },
    dates: { control: "text" },
  },
  args: {
    isChecked: true,
    pauseText: "Sæt fysiske reserveringer på pause",
    isPausedtext: "Dine fysiske reserveringer er på pause",
    dates: "20.09.2021 - 12.10.2021",
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
