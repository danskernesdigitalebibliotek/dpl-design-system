import { Meta } from "@storybook/react-webpack5";

import { IconSocial as IconSocialComp } from "./IconSocial";

const StoryBase: Meta = {
  title: "Library / Icons / Social",
  component: IconSocialComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1%3A4",
    },
  },
};

export default StoryBase;

export const Social = () => <IconSocialComp />;
