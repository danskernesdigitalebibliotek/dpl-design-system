import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Input from "./Input";

export default {
  title: "Library / Forms / Input",
  component: Input,
  decorators: [withDesign],
  argTypes: {
    label: {
      defaultValue: "Navn",
    },
    type: {
      defaultValue: "text",
    },
    id: {
      defaultValue: "id",
    },
    description: { defaultValue: "Dit fulde navn" },
    validation: { defaultValue: "Fejlbesked lorem ipsum dolor" },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1239%3A66174",
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
