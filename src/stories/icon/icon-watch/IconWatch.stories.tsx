import { Meta } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { IconWatch as IconWatchComp } from "./IconWatch";

const StoryBase: Meta = {
  title: "DPL Design System / Icons",
  component: IconWatchComp,
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

export const Watch = () => <IconWatchComp />;
