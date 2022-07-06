import React from "react";
import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Logo as LogoComp } from "./Logo";

type LogoProps = typeof LogoComp;

export default {
  title: "Library / Logo",
  component: LogoComp,
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

const Template: ComponentStory<LogoProps> = (args) => <LogoComp {...args} />;

export const Logo = Template.bind({});
Logo.args = {
  fallback: false,
  altText: "logo",
};

export const LogoFallback = Template.bind({});
LogoFallback.args = {
  fallback: true,
  libraryName: "Hjørring",
};
