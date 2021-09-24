import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { LinkFilters } from "./LinkFilters";

export default {
  title: "DPL Design System / Link filters",
  component: LinkFilters,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=274%3A7545",
    },
  },
} as Meta;

export const Default = () => <LinkFilters />;
