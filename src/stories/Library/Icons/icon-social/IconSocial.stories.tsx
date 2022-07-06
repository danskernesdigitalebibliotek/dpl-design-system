import { Meta } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { IconSocial as IconSocialComp } from "./IconSocial";

const StoryBase: Meta = {
  title: "Library / Icons / Social",
  component: IconSocialComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1%3A4",
    },
  },
};

export default StoryBase;

export const Social = () => <IconSocialComp />;
