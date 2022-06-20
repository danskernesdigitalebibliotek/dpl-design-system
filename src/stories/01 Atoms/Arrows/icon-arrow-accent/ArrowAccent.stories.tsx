import { Meta } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import { StoryBaseType } from "../../../../types/StorybookHelpers";

import { IconAccent as IconAccentComp } from "./ArrowAccent";

const StoryBase: Meta = {
  title: "Atoms / Arrows / Arrow Accent",
  component: IconAccentComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=282%3A3763",
    },
    layout: "centered",
  },
};

export default StoryBase;

export const ArrowAccent = () => <IconAccentComp />;
