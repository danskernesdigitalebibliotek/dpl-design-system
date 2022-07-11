import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { Spacing } from "./Spacing";

export default {
  title: "Library / Spacing",
  component: Spacing,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=255%3A2080",
    },
  },
} as Meta;

export const Default = () => <Spacing />;
