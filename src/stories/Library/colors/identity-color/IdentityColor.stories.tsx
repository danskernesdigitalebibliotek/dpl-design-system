import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import {
  IdentityColor as IdentityColorComp,
  IdentityColorProps,
} from "./IdentityColor";

export default {
  title: "Library / Colors / Identity Color",
  component: IdentityColorComp,
  decorators: [withDesign],
  argTypes: {
    identityColor: {
      defaultValue: "#476e57",
      control: { type: "color" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2%3A4",
    },
  },
} as Meta;

export const IdentityColor = (props: IdentityColorProps) => (
  <IdentityColorComp {...props} />
);
