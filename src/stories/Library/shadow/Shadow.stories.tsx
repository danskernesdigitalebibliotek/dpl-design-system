import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { Shadow } from "./Shadow";

export default {
  title: "Library / Shadow",
  component: Shadow,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=255%3A2080",
    },
  },
} as Meta;

export const Default = () => <Shadow />;
