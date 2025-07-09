import { Meta, StoryFn } from "@storybook/react-webpack5";

import { RecommendedMaterial } from "./RecommendedMaterial";
import recommendedMaterialArgs from "./RecommendedMaterialArgs";

export default {
  title: "Library / Recommended Material",
  component: RecommendedMaterial,
  argTypes: {
    favoriteFill: {
      control: "boolean",
    },
  },
  args: {
    favoriteFill: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=434-6005&mode=design&t=ADgZ8H4KNumis8iG-4",
    },
  },
} as Meta<typeof RecommendedMaterial>;

const Template: StoryFn<typeof RecommendedMaterial> = (args) => (
  <RecommendedMaterial {...args} />
);

export const MediumCoverRecommendation = Template.bind({});
MediumCoverRecommendation.args = {
  ...recommendedMaterialArgs,
};
