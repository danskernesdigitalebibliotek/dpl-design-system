import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import TagList from "./TagList";

export default {
  title: "Library / Tag List",
  component: TagList,
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
} as ComponentMeta<typeof TagList>;

const Template: ComponentStory<typeof TagList> = (args) => (
  <TagList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tags: ["litteratur"],
};

export const WithTags = Template.bind({});
WithTags.args = {
  tags: ["litteratur", "skønlitteratur", "børn", "fantasy"],
};
