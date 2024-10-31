import { Meta, StoryFn } from "@storybook/react";

import TagList from "./TagList";

export default {
  title: "Library / Tag List",
  component: TagList,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=836%3A5757",
    },
    layout: "centered",
  },
  argTypes: {
    tags: {
      control: "object",
      description: "Array of tag strings to display",
    },
  },
} as Meta<typeof TagList>;

const Template: StoryFn<typeof TagList> = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: ["litteratur"],
};

export const WithTags = Template.bind({});
WithTags.args = {
  tags: ["litteratur", "skønlitteratur", "børn", "fantasy"],
};
