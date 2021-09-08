import { Meta } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { IconBasic as IconBasicComp } from "./IconBasic";

const StoryBase: Meta = {
  title: "DPL Design System / Icons",
  component: IconBasicComp,
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

export const Basic = () => <IconBasicComp />;
