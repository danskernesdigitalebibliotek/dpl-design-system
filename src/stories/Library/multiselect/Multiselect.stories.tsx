import { StoryFn, Meta } from "@storybook/react";

import { Multiselect as MultiselectComp } from "./Multiselect";

export default {
  title: "Library / Dropdown / Multiselect",
  component: MultiselectComp,

  argTypes: {
    options: {
      defaultValue: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      control: {
        type: "object",
      },
    },
    isOpen: {
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
    withCaption: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=9759%3A31313&mode=design&t=TmGJu5BAOnJAi4UR-1",
    },
    layout: "centered",
  },
} as Meta<typeof MultiselectComp>;

const Template: StoryFn<typeof MultiselectComp> = (args) => (
  <MultiselectComp {...args} />
);

export const Multiselect = Template.bind({});
