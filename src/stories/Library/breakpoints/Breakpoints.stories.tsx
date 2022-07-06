import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { Breakpoints } from "./Breakpoints";

export default {
  title: "Library / Breakpoints",
  component: Breakpoints,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=255%3A2080",
    },
    layout: "centered",
  },
} as Meta;

export const Default = () => <Breakpoints />;
