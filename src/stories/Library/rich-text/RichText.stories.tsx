import { Meta, StoryFn } from "@storybook/react";

import { RichText } from "./RichText";

export default {
  title: "Library / Rich Text",
  component: RichText,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7880-59101&mode=design&t=dMcJmvsouH6erxzA-4",
    },
    layout: "centered",
  },
} as Meta<typeof RichText>;

const Template: StoryFn<typeof RichText> = () => <RichText />;

export const Default = Template.bind({});
