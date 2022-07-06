import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { Typography } from "./Typography";

export default {
  title: "Library / Typography",
  component: Typography,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2%3A476",
    },
  },
} as Meta;

export const Default = () => <Typography />;
