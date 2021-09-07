import { Meta } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { IconSocial as IconSocialComp } from "./IconSocial";

const StoryBase: Meta = {
  title: "Example / Icons",
  component: IconSocialComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/nlfoetwH1eSQt6LletpSIi/Design-System-2021?node-id=1%3A132",
    },
  },
};

export default StoryBase;

export const Social = () => <IconSocialComp />;
