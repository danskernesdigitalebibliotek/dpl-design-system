import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Material } from "./Material";

export default {
  title: "Atoms / Material",
  component: Material,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof Material>;

const Template: ComponentStory<typeof Material> = (args) => (
  <Material {...args} />
);

export const MaterialVisible = Template.bind({});
MaterialVisible.args = {
  url: "images/book_cover_3.jpg",
  size: "small",
  animate: false,
  tint: "120",
};

export const MaterialNotVisible = Template.bind({});
MaterialNotVisible.args = {
  url: "",
  size: "small",
  animate: false,
  tint: "60",
};

export const MaterialAnimated = Template.bind({});
MaterialAnimated.args = {
  url: "images/book_cover_3.jpg",
  animate: true,
  size: "small",
  tint: "80",
};
