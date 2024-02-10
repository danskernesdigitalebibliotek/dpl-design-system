import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Logo, { LogoProps } from "./Logo";

export default {
  title: "Library / Logo",
  component: Logo,
  decorators: [withDesign],
  argTypes: {
    libraryName: {
      defaultValue: "Hjørring",
    },
    altText: {
      defaultValue: "Logo",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=264%3A2263",
    },
    layout: "centered",
  },
};

const Template: ComponentStory<typeof Logo> = (args: LogoProps) => (
  <Logo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fallback: false,
  altText: "logo",
};

export const LogoFallback = Template.bind({});
LogoFallback.args = {
  fallback: true,
  libraryName: "Hjørring",
};
