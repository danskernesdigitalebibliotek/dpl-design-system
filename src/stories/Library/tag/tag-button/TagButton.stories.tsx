import { StoryFn } from "@storybook/react";

import { TagButton as TagComp } from "./TagButton";

type TagProps = typeof TagComp;

export default {
  title: "Library / Tag / Tag button",
  component: TagComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=836%3A5757",
    },
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    hasBackground: {
      control: { type: "boolean" },
    },
    showCloseIcon: {
      control: { type: "boolean" },
    },
    isClickable: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "medium",
    hasBackground: false,
    showCloseIcon: false,
    isClickable: true,
  },
};

export const Tag: StoryFn<TagProps> = (args) => (
  <TagComp {...args}>Vi anbefaler</TagComp>
);
Tag.args = {
  size: "large",
  hasBackground: true,
};

export const TagRemovable: StoryFn<TagProps> = (args) => (
  <TagComp {...args}>Litteratur</TagComp>
);
TagRemovable.args = {
  showCloseIcon: true,
  hasBackground: true,
};

export const facet: StoryFn<TagProps> = (args) => (
  <TagComp {...args}>Skønlitteratur (96)</TagComp>
);
facet.args = {
  hasBackground: false,
};
