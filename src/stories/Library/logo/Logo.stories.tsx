import { StoryFn } from "@storybook/react";
import Logo, { LogoProps } from "./Logo";

export default {
  title: "Library / Logo",
  component: Logo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=264%3A2263",
    },
    layout: "centered",
  },
};

const Template: StoryFn<typeof Logo> = (args: LogoProps) => <Logo {...args} />;

export const LogoWithImage = Template.bind({});
LogoWithImage.args = {
  hasImage: true,
  libraryName: "Hjørring",
  libraryPlace: "Bibliotekerne",
  altText: "Logo",
};

export const LogoWithoutImage = Template.bind({});
LogoWithoutImage.args = {
  hasImage: false,
  libraryName: "Hjørring",
  libraryPlace: "Bibliotekerne",
  altText: "Logo",
};
