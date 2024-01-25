import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { RecommendedMaterial } from "./RecommendedMaterial";
import recommendedMaterialArgs from "./RecommendedMaterialArgs";

export default {
  title: "Library / Recommended Material",
  component: RecommendedMaterial,
  decorators: [withDesign],
  argTypes: {
    favoriteFill: {
      control: "boolean",
      defaultValue: true,
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=434-6005&mode=design&t=ADgZ8H4KNumis8iG-4",
    },
  },
} as ComponentMeta<typeof RecommendedMaterial>;

const Template: ComponentStory<typeof RecommendedMaterial> = (args) => (
  <RecommendedMaterial {...args} />
);

export const MediumCoverRecommendation = Template.bind({});
MediumCoverRecommendation.args = {
  ...recommendedMaterialArgs,
};
