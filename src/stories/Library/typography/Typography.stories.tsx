import { Meta } from "@storybook/react-webpack5";

import { Typography } from "./Typography";

export default {
  title: "Library / Typography",
  component: Typography,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2%3A476",
    },
    layout: "padded",
  },
} as Meta;

export const Default = () => <Typography />;
