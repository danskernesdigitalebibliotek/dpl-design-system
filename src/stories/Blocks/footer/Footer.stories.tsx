import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { Footer as FooterComp } from "./Footer";

export default {
  title: "Blocks / Footer",
  component: FooterComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1354%3A8716",
    },
  },
} as Meta;

export const Footer = () => <FooterComp />;
