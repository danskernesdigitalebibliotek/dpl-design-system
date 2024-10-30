import { Meta, StoryFn } from "@storybook/react";

import OpeningHoursSidebar from "./OpeningHoursSidebar";
import defaultLibraries from "./opening-hours-libraries-data";

export default {
  title: "Library/Opening Hours Sidebar/Without Dialog",
  component: OpeningHoursSidebar,

  argTypes: {
    title: {
      defaultValue: "Dagens åbningstider",
      control: {
        type: "text",
      },
    },
    dateString: {
      defaultValue: "fredag 28. maj",
      control: {
        type: "text",
      },
    },
    libraries: {
      control: {
        type: "object",
      },
      defaultValue: defaultLibraries,
    },
    link: {
      defaultValue: "#",
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=7760-59368&t=FtYoMFQsdy52r88A-4",
    },
  },
} as Meta<typeof OpeningHoursSidebar>;

const Template: StoryFn<typeof OpeningHoursSidebar> = (args) => {
  return (
    <div className="storybook-dialog-sidebar">
      <OpeningHoursSidebar {...args} />;
    </div>
  );
};

export const Default = Template.bind({});
