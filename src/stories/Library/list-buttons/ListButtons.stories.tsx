import { Meta, StoryFn } from "@storybook/react";

import { ListButton } from "./ListButtons";

export default {
  title: "Library / List buttons",
  component: ListButton,

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=607%3A30620",
    },
  },
  argTypes: {
    buttonLabel: {
      control: "text",
      defaultValue: "Forny alle",
    },
    header: {
      control: "text",
      defaultValue: "Forny lån",
    },
    number: {
      control: "text",
      defaultValue: "10",
    },
  },
} as Meta<typeof ListButton>;

const Template: StoryFn<typeof ListButton> = (args) => <ListButton {...args} />;

export const ListButtonsExample = Template.bind({});
