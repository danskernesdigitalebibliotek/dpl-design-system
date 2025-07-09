import { Meta } from "@storybook/react-webpack5";

import { IconCollection as IconCollectionComp } from "./IconCollection";

const StoryBase: Meta = {
  title: "Library / Icons / Collection",
  component: IconCollectionComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1385%3A10755",
    },
  },
};

export default StoryBase;

export const Collection = () => <IconCollectionComp />;
