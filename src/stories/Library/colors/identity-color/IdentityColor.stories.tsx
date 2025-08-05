import { Meta } from "@storybook/react-webpack5";

import {
  IdentityColor as IdentityColorComp,
  IdentityColorProps,
} from "./IdentityColor";

export default {
  title: "Library / Colors / Identity Color",
  component: IdentityColorComp,
  argTypes: {
    identityColor: {
      control: { type: "color" },
    },
  },
  args: {
    identityColor: "#476e57",
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
