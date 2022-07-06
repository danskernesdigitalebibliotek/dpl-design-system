import { Meta } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { IconBasic as IconBasicComp } from "./IconBasic";

const StoryBase: Meta = {
  title: "Library / Icons / Basic",
  component: IconBasicComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1385%3A10755",
    },
  },
};

export default StoryBase;

export const Basic = () => <IconBasicComp />;
