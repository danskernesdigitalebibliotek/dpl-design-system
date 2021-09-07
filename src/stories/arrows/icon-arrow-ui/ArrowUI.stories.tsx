import React from "react";
import { withDesign } from "storybook-addon-designs";
import { StoryBaseType } from "../../../types/StorybookHelpers";

import { IconArrow as ArrowComp, IconArrowProps } from "./ArrowUI";

const StoryBase: StoryBaseType<IconArrowProps> = {
  title: "Example / Arrows / Arrow UI",
  component: ArrowComp,
  decorators: [withDesign],
  argTypes: {
    direction: {
      defaultValue: "left",
    },
    hover: {
      defaultValue: true,
    },
    size: {
      defaultValue: "large",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=10%3A395",
    },
  },
};

export default StoryBase;

export const ArrowUI = (props: IconArrowProps) => <ArrowComp {...props} />;
