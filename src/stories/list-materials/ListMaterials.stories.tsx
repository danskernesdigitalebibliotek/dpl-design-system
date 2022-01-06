import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListMaterials } from "./ListMaterials";

export default {
  title: "Components / List - Materials",
  component: ListMaterials,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1385%3A8204",
    },
  },
} as ComponentMeta<typeof ListMaterials>;

const Template: ComponentStory<typeof ListMaterials> = (args) => (
  <ListMaterials {...args} />
);

export const Item = Template.bind({});
Item.args = {
  title: "Audrey Hepburn",
  author: "Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",
  isChecked: true,
  canBeRenewed: true,
  statusDelivery: {
    label: "AFLEVERES 20.11.21",
    status: "neutral",
  },
  statusMaterialType: {
    label: "bog",
    status: "outline",
  },
};
