// Recommendation.stories.tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Recommendation } from "./Recommendation";
import recommendedMaterialArgs from "../recommended-material/RecommendedMaterialArgs";

export default {
  title: "Library/Recommendation",
  component: Recommendation,
  argTypes: {
    title: {
      control: "text",
      description: "Title of the recommendation",
    },
    description: {
      control: "text",
      description: "Description of the recommendation",
    },
    href: {
      control: "text",
      description: "Link to the recommended material",
    },
    positionImageRight: {
      control: "boolean",
      description: "Toggle image position",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=434-6424&mode=design&t=ADgZ8H4KNumis8iG-4",
    },
  },
} as ComponentMeta<typeof Recommendation>;

const Template: ComponentStory<typeof Recommendation> = (args) => (
  <Recommendation {...args} />
);

export const RecommendationImageLeft = Template.bind({});

RecommendationImageLeft.args = {
  positionImageRight: false,
  title: "Børnenes Naturhobbybog",
  description:
    "Naturen er fyldt med alle mulige ting fx blade, blomster, sten osv., der kan bruges til at lave en forskellige kreative ting af. Her er inspiration at hente til små og store hobbyprojekter.",
  href: "#",
  recommendedMaterialProps: {
    ...recommendedMaterialArgs,
  },
};
export const RecommendationImageRight = Template.bind({});

RecommendationImageRight.args = {
  positionImageRight: true,
  title: "Børnenes Naturhobbybog",
  description:
    "Naturen er fyldt med alle mulige ting fx blade, blomster, sten osv., der kan bruges til at lave en forskellige kreative ting af. Her er inspiration at hente til små og store hobbyprojekter.",
  href: "#",
  recommendedMaterialProps: {
    ...recommendedMaterialArgs,
  },
};
