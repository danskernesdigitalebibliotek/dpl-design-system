import { Meta, StoryFn } from "@storybook/react-webpack5";

import OpeningHoursSidebar from "./OpeningHoursSidebar";
import defaultLibraries from "./opening-hours-libraries-data";

export default {
  title: "Library/Opening Hours Sidebar/Without Dialog",
  component: OpeningHoursSidebar,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    dateString: {
      control: {
        type: "text",
      },
    },
    libraries: {
      control: {
        type: "object",
      },
    },
    link: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    title: "Dagens åbningstider",
    dateString: "fredag 28. maj",
    libraries: defaultLibraries,
    link: "#",
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
      <OpeningHoursSidebar {...args} />
    </div>
  );
};

export const Default = Template.bind({});
