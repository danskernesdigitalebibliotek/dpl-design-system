import { Meta, StoryFn } from "@storybook/react-webpack5";

import Cover from "./Cover";

export default {
  title: "Library / Cover",
  component: Cover,
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
    description: {
      name: "Cover description",
      control: "text",
    },
    src: {
      name: "Image src",
      control: "text",
    },
  },
  args: {
    size: "small",
    animate: false,
    src: "images/book_cover_3.jpg",
    tint: "120",
    coverUrl: "https://www.google.com",
    description: "/",
  },
  parameters: {},
} as Meta<typeof Cover>;

const Template: StoryFn<typeof Cover> = (args) => <Cover {...args} />;

export const CoverVisible = Template.bind({});
CoverVisible.args = {};

export const CoverNotVisible = Template.bind({});
CoverNotVisible.args = {
  src: "",
  tint: "100",
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
  alt: "Cover of Audrey Hepburn",
};

export const SrcNotWork = Template.bind({});
SrcNotWork.args = {
  src: "abe",
  tint: "100",
  coverUrl: "",
};
