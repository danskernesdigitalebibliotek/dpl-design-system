import { Meta } from "@storybook/react";

import { Shadows } from "./Shadows";

export default {
  title: "Library / Shadows",
  component: Shadows,

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=255%3A2080",
    },
  },
} as Meta;

export const Default = () => <Shadows />;
