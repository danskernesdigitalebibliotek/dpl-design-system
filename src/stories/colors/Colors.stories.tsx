import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { Colors, ColorsProps } from "./Colors";

export default {
  title: "Atoms / Colors",
  component: Colors,
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
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2%3A4",
    },
  },
} as Meta;

export const Default = (props: ColorsProps) => <Colors {...props} />;
