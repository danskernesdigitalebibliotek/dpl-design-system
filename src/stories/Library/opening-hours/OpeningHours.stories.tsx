import { Meta, StoryFn } from "@storybook/react";

import OpeningHours from "./OpeningHours";
import { groupedOpeningHoursExampleData } from "./OpeningHoursExampleData";

export default {
  title: "Library / Opening Hours",
  component: OpeningHours,

  argTypes: {
    weekCurrentlyDisplayed: {
      defaultValue: "Uge 4, 2023",
      control: {
        type: "text",
      },
    },
    groupedOpeningHours: {
      defaultValue: groupedOpeningHoursExampleData,
      control: {
        type: "object",
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7486-63527&mode=design&t=9DUvbqMhUcaeDTKR-4",
    },
  },
} as Meta<typeof OpeningHours>;

const Template: StoryFn<typeof OpeningHours> = (args) => (
  <OpeningHours {...args} />
);

export const Default = Template.bind({});
