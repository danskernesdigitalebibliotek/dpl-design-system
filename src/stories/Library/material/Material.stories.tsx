import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Material } from "./Material";

export default {
  title: "Library / Materials / Material",
  component: Material,
  decorators: [withDesign],
  argTypes: {
    size: {
      name: "Image size",
      control: "radio",
    },
    tint: {
      name: "Background color tint",
      control: "radio",
    },
    animate: {
      name: "Use animation",
      control: "boolean",
    },
    materialUrl: {
      name: "Material URL",
      control: "text",
    },
    materialDescription: {
      name: "Material description",
      control: "text",
    },
    url: {
      name: "Cover URL",
      control: "text",
    },
  },
  args: {
    size: "small",
    animate: false,
    url: "images/book_cover_3.jpg",
    tint: "120",
    materialUrl: "https://www.google.com",
    materialDescription: "/",
  },
  parameters: {},
} as ComponentMeta<typeof Material>;

const Template: ComponentStory<typeof Material> = (args) => (
  <Material {...args} />
);

export const MaterialVisible = Template.bind({});
MaterialVisible.args = {};

export const MaterialNotVisible = Template.bind({});
MaterialNotVisible.args = {
  url: "",
  tint: "60",
  materialUrl: "",
};

export const MaterialAnimated = Template.bind({});
MaterialAnimated.args = {
  animate: true,
  tint: "80",
  materialUrl: "",
};

export const MaterialLinked = Template.bind({});
MaterialLinked.args = {
  animate: true,
  size: "small",
  tint: "80",
  materialUrl: "/",
  materialDescription: "Cover of Audrey Hepburn",
};
