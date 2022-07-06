import React from "react";
import { withDesign } from "storybook-addon-designs";
import { StoryBaseType } from "../../../../types/StorybookHelpers";

import { IconArrow as ArrowComp, IconArrowProps } from "./ArrowUI";

const StoryBase: StoryBaseType<IconArrowProps> = {
  title: "Library / Arrows / Arrow UI",
  component: ArrowComp,
  decorators: [withDesign],
  argTypes: {
    direction: {
      defaultValue: "right",
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
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=264%3A3146",
    },
    layout: "centered",
  },
};

export default StoryBase;

export const ArrowUI = (props: IconArrowProps) => (
  <ArrowComp {...props}>
    <div className="internal-arrow-box">
      To animate the arrow on hover, we have to embed the svg inline
    </div>
  </ArrowComp>
);
