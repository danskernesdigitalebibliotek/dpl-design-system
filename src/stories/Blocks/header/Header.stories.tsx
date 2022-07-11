import { ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Header as HeaderComp, HeaderProps } from "./Header";

export default {
  title: "Blocks / Header",
  component: HeaderComp,
  decorators: [withDesign],
  argTypes: {
    signedIn: {
      defaultValue: false,
    },
    haveNotification: {
      defaultValue: false,
    },
    username: {
      defaultValue: "Christine",
    },
    inputPlaceholder: {
      defaultValue: "Søg blandt bibliotekets materialer",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=264%3A2160",
    },
  },
} as ComponentMeta<typeof Header>;

export const Header = (props: HeaderProps) => <HeaderComp {...props} />;
