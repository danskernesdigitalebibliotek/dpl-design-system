import { StoryFn, Meta } from "@storybook/react-webpack5";
import MediaContainer from "./MediaContainer";
import ImageCredited from "../image-credited/ImageCredited";

export default {
  title: "Library / Media container",
  component: MediaContainer,
  argTypes: {
    media: { type: "string" },
    placeholderText: { type: "string" },
  },
  args: {
    media: (
      <ImageCredited
        description="Beskrivelse"
        year="2021"
        src="https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
    placeholderText: "En placeholder tekst",
  },
} as Meta<typeof MediaContainer>;

const Template: StoryFn<typeof MediaContainer> = (args) => (
  <MediaContainer {...args} />
);

export const Default = Template.bind({});
export const noMedia = Template.bind({});
noMedia.args = {
  media: undefined,
};
