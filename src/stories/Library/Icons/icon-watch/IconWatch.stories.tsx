import { Meta } from "@storybook/react-webpack5";

import { IconWatch as IconWatchComp } from "./IconWatch";

const StoryBase: Meta = {
  title: "Library / Icons / Watch",
  component: IconWatchComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=37%3A422",
    },
  },
};

export default StoryBase;

export const Watch = () => <IconWatchComp />;
