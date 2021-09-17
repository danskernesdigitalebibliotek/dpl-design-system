import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { Footer } from "./Footer";

export default {
  title: "DPL Design System / Footer",
  component: Footer,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1354%3A8716",
    },
  },
} as Meta;

export const Default = () => <Footer />;
