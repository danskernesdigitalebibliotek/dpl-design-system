import { StoryFn, Meta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Library / Forms / Input",
  component: Input,
  argTypes: {
    label: { control: { type: "text" } },
    type: { control: { type: "select", options: ["text", "password"] } },
    id: { control: { type: "text" } },
    description: { control: { type: "text" } },
    validation: { control: { type: "text" } },
  },
  args: {
    label: "Navn",
    type: "text",
    id: "id",
    description: "Dit fulde navn",
    validation: "Fejlbesked lorem ipsum dolor",
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
