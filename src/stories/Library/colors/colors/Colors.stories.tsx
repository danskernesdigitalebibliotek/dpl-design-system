import { withDesign } from "storybook-addon-designs";
import { Meta } from "@storybook/react";

import { Colors as ColorsComp } from "./Colors";

export default {
  title: "Library / Colors / Colors",
  component: ColorsComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2%3A4",
    },
  },
} as Meta;

export const Colors = () => <ColorsComp />;
