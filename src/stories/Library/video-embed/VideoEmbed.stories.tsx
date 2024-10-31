import { StoryFn, Meta } from "@storybook/react";
import VideoEmbed from "./VideoEmbed";

export default {
  title: "Library / Video Embed",
  component: VideoEmbed,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=16042-22933&t=kwXRJW0pZzoQmJHm-1",
    },
    layout: "fullscreen",
  },
  argTypes: {
    buttonText: { type: "string" },
    acceptCookies: { control: "boolean" },
    info: { type: "string" },
    src: { type: "string" },
  },
  args: {
    buttonText: "Manage consent",
    acceptCookies: false,
    info: "To view this content, we need your consent to use marketing cookies.",
    src: "https://www.youtube.com/embed/CmzKQ3PSrow",
  },
} as Meta<typeof VideoEmbed>;

const Template: StoryFn<typeof VideoEmbed> = (args) => <VideoEmbed {...args} />;

export const Default = Template.bind({});
