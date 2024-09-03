import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MaterialGrid } from "./MaterialGrid";
import MaterialGridData from "./MaterialGridData";

export default {
  title: "Library/ Material Grid",
  component: MaterialGrid,
  argTypes: {
    title: {
      control: "text",
      description: "Title of the recommendation",
    },
    description: {
      control: "text",
      description: "This is a description of the materials selected",
    },
    selectedAmountOfMaterialsForDisplay: {
      control: {
        type: "select",
        options: [4, 8, 12, 16, 20, 24, 28, 32],
      },
      description: "Amount of materials to show",
    },
    materials: {
      control: "object",
      description: "Recommended materials",
    },
    buttonText: {
      control: "text",
      description: "Text for the button",
    },
  },
  args: {
    title: "Recommended materials",
    description:
      "This is a long description of the materials selected, or whatever else you want to put in here",
    selectedAmountOfMaterialsForDisplay: 4,
    materials: MaterialGridData,
    buttonText: "Show more",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=446-6954&mode=design&t=IkusOClO6YuhuPrb-4",
    },
  },
} as ComponentMeta<typeof MaterialGrid>;

const Template: ComponentStory<typeof MaterialGrid> = (args) => (
  <MaterialGrid {...args} />
);

export const Default = Template.bind({});

export const GridWithMoreMaterials = Template.bind({});

GridWithMoreMaterials.args = {
  selectedAmountOfMaterialsForDisplay: 8,
};

export const GridWithNoDescription = Template.bind({});

GridWithNoDescription.args = {
  description: "",
};

export const GridWithNoTitleOrDescription = Template.bind({});

GridWithNoTitleOrDescription.args = {
  title: "",
  description: "",
};
