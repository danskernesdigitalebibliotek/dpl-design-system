import { Meta, StoryFn } from "@storybook/react";

import OpeningHoursSidebar from "./OpeningHoursSidebar";
import Dialog from "../dialog/Dialog";
import useDialog from "../dialog/useDialog";
import defaultLibraries from "./opening-hours-libraries-data";

export default {
  title: "Library/Opening Hours Sidebar/With Dialog",
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
    title: "Åbningstider",
    dateString: "I dag (fredag 28. maj)",
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
  const { dialogContent, openDialogWithContent, closeDialog, dialogRef } =
    useDialog();

  return (
    <>
      <button
        type="button"
        onClick={() => openDialogWithContent(<OpeningHoursSidebar {...args} />)}
      >
        Open Sidebar
      </button>

      <Dialog isSidebar closeDialog={closeDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
