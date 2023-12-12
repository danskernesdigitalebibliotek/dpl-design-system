import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Medias from "./Medias";
import ImageCredited from "../image-credited/ImageCredited";

export default {
  title: "Library / Medias",
  component: Medias,
  decorators: [withDesign],
  argTypes: {
    items: {
      // Disabling controls, as the different variations are added already.
      control: false,
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39100&mode=design&t=SREzD6mFi3A15ap4-4",
    },
  },
} as ComponentMeta<typeof Medias>;

const Template: ComponentStory<typeof Medias> = (args) => <Medias {...args} />;

export const Multiple = Template.bind({});
Multiple.args = {
  items: [
    <ImageCredited
      src="https://i.imgur.com/0Fis99n.jpeg"
      description="Happy dog is Happy"
    />,
    <ImageCredited src="https://i.imgur.com/KYhYZkp.jpeg" />,
  ],
};

export const Single = Template.bind({});
Single.args = {
  items: [<ImageCredited src="https://i.imgur.com/KYhYZkp.jpeg" />],
};
