import { StoryFn, Meta } from "@storybook/react";
import ImageCredited from "./ImageCredited";

export default {
  title: "Library / Image Credited",
  component: ImageCredited,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    description: { control: "text" },
    year: { control: "text" },
  },
  args: {
    src: "https://plus.unsplash.com/premium_photo-1696886122527-e4303b76aa8f?q=80&w=5156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Photo by Unsplash",
    description: "Fernisering Modern Dans",
    year: "©2021",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39846&mode=dev",
    },
  },
} as Meta<typeof ImageCredited>;

const Template: StoryFn<typeof ImageCredited> = (args) => (
  <ImageCredited {...args} />
);

export const Default = Template.bind({});
export const withOutImage = Template.bind({});
withOutImage.args = {
  src: "",
};
