import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ImageCredited from "./ImageCredited";

export default {
  title: "Library / Image Credited",
  component: ImageCredited,
  decorators: [withDesign],
  argTypes: {
    src: {
      defaultValue:
        "https://plus.unsplash.com/premium_photo-1696886122527-e4303b76aa8f?q=80&w=5156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "string",
    },
    alt: {
      defaultValue: "Photo by Unsplash",
      type: "string",
    },
    description: {
      defaultValue: "Fernisering Modern Dans",
      type: "string",
    },
    year: {
      defaultValue: "©2021",
      type: "string",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39846&mode=dev",
    },
  },
} as ComponentMeta<typeof ImageCredited>;

const Template: ComponentStory<typeof ImageCredited> = (args) => (
  <ImageCredited {...args} />
);

export const Default = Template.bind({});
