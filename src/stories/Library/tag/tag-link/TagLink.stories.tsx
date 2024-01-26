import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { TagLink as TagComp } from "./TagLink";

type TagProps = typeof TagComp;

export default {
  title: "Library / Tag / Tag link",
  component: TagComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=836%3A5757",
    },
    layout: "centered",
  },
  argTypes: {
    children: {
      name: "text",
      control: { type: "text" },
      defaultValue: "Litteratur",
    },
    hasBackground: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    showCloseIcon: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

export const Default: ComponentStory<TagProps> = ({ children, ...args }) => (
  <TagComp {...args}>{children}</TagComp>
);

export const LargeWithBackground: ComponentStory<TagProps> = ({
  children,
  ...args
}) => <TagComp {...args}>{children}</TagComp>;
LargeWithBackground.args = {
  size: "large",
  hasBackground: true,
};

export const Removable: ComponentStory<TagProps> = ({ children, ...args }) => (
  <TagComp {...args}>{children}</TagComp>
);
Removable.args = {
  showCloseIcon: true,
  hasBackground: true,
};
