import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Cover } from "./Cover";

export default {
  title: "Library / Cover",
  component: Cover,
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
    coverUrl: {
      name: "Cover URL",
      control: "text",
    },
    coverDescription: {
      name: "Cover description",
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
    coverUrl: "https://www.google.com",
    coverDescription: "/",
  },
  parameters: {},
} as ComponentMeta<typeof Cover>;

const Template: ComponentStory<typeof Cover> = (args) => <Cover {...args} />;

export const CoverVisible = Template.bind({});
CoverVisible.args = {};

export const CoverNotVisible = Template.bind({});
CoverNotVisible.args = {
  url: "",
  tint: "60",
  coverUrl: "",
};

export const CoverAnimated = Template.bind({});
CoverAnimated.args = {
  animate: true,
  tint: "80",
  coverUrl: "",
};

export const CoverLinked = Template.bind({});
CoverLinked.args = {
  animate: true,
  size: "small",
  tint: "80",
  coverUrl: "/",
  coverDescription: "Cover of Audrey Hepburn",
};
