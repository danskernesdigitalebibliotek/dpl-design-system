import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { PauseReservation } from "./PauseReservation";

export default {
  title: "Library / Pause reservation",
  component: PauseReservation,
  decorators: [withDesign],
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
} as ComponentMeta<typeof PauseReservation>;

const Template: ComponentStory<typeof PauseReservation> = (args) => (
  <PauseReservation {...args} />
);

export const PauseReservationExample = Template.bind({});
PauseReservationExample.args = {
  isChecked: false,
};
