import { ComponentStory, ComponentMeta } from "@storybook/react";
import VideoEmbed from "./VideoEmbed";

export default {
  title: "Library / Video Embed",
  component: VideoEmbed,
  argTypes: {
    src: {
      defaultValue: "https://www.youtube.com/embed/CmzKQ3PSrow",
      type: "string",
    },
  },
  parameters: {},
} as ComponentMeta<typeof VideoEmbed>;

const Template: ComponentStory<typeof VideoEmbed> = (args) => (
  <VideoEmbed {...args} />
);

export const Default = Template.bind({});
