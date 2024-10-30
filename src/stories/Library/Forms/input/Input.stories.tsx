import { StoryFn, Meta } from "@storybook/react";

import Input from "./Input";

export default {
  title: "Library / Forms / Input",
  component: Input,

  argTypes: {
    label: {
      defaultValue: "Navn",
      control: { type: "text" },
    },
    type: {
      defaultValue: "text",
      control: { type: "select", options: ["text", "password"] },
    },
    id: {
      defaultValue: "id",
      control: { type: "text" },
    },
    description: {
      defaultValue: "Dit fulde navn",
      control: { type: "text" },
    },
    validation: {
      defaultValue: "Fejlbesked lorem ipsum dolor",
      control: { type: "text" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66174",
    },
    layout: "padded",
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
