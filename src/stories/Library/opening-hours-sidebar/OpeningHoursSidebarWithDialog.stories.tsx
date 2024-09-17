import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import OpeningHoursSidebar from "./OpeningHoursSidebar";
import Dialog from "../dialog/Dialog";
import useDialog from "../dialog/useDialog";
import defaultLibraries from "./opening-hours-libraries-data";

export default {
  title: "Library/Opening Hours Sidebar/With Dialog",
  component: OpeningHoursSidebar,
  decorators: [withDesign],
  argTypes: {
    title: {
      defaultValue: "Åbningstider",
      control: {
        type: "text",
      },
    },
    dateString: {
      defaultValue: "I dag (fredag 28. maj)",
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
} as ComponentMeta<typeof OpeningHoursSidebar>;

const Template: ComponentStory<typeof OpeningHoursSidebar> = (args) => {
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
