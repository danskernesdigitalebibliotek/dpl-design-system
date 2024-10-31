import { Meta } from "@storybook/react";

import { ReactComponent as ArrowAccentIcon } from "../../../../public/icons/arrow-accent/icon-arrow-accent.svg";

const StoryBase: Meta = {
  title: "Library / Arrows / Arrow Accent",
  component: ArrowAccentIcon,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=282%3A3763",
    },
    layout: "centered",
  },
};

export default StoryBase;

export const ArrowAccent = () => <ArrowAccentIcon />;
