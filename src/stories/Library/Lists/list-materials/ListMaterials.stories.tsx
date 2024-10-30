import { Meta, StoryFn } from "@storybook/react";
import { ListMaterials } from "./ListMaterials";

export default {
  title: "Library / Lists / Materials",
  component: ListMaterials,

  // We disable the isChecked control, since it is not possible to
  // get the states from the React component to work with Storybook controls.
  argTypes: {
    isChecked: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1385%3A8204",
    },
  },
} as Meta<typeof ListMaterials>;

const Template: StoryFn<typeof ListMaterials> = (args) => (
  <ul>
    <ListMaterials {...args} />
  </ul>
);

export const Item = Template.bind({});
Item.args = {
  year: "2001",
  title: "Audrey Hepburn",
  author: "Af Isabel Sánchez Vegara, Amaia Arrazola",
  statusMessage: "Can't be renewed further",
  isChecked: true,
  disabled: true,
  statusMaterialType: {
    label: "bog",
    status: "outline",
  },
};
