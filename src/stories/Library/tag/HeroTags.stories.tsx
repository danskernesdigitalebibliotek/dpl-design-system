import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import HeroTags from "./HeroTags";

export default {
  title: "Library / HeroTags",
  component: HeroTags,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=836%3A5757",
    },
    layout: "centered",
    argTypes: {
      tags: {
        defaultValue: [],
        type: "array",
      },
    },
  },
} as ComponentMeta<typeof HeroTags>;

const Template: ComponentStory<typeof HeroTags> = (args) => (
  <HeroTags {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tags: ["litteratur"],
};

export const WithTags = Template.bind({});
WithTags.args = {
  tags: ["litteratur", "skønlitteratur", "børn", "fantasy"],
};
