import { StoryFn, Meta } from "@storybook/react";

import { ButtonUI, ButtonUIProps } from "./ButtonUI";

export default {
  title: "Library / Buttons / ButtonUI",
  component: ButtonUI,
  argTypes: {
    content: {
      control: "object",
    },
    ariaLabel: { control: "text" },
    label: { control: "text" },
    disabled: { control: "boolean" },
    collapsible: { control: "boolean" },
    size: { control: "select" },
    variant: { control: "select" },
  },
  args: {
    content: {
      kind: "LABEL",
      label: "Se hele kalenderen",
    },
    ariaLabel: "Calendar button",
    disabled: false,
    collapsible: false,
    size: "medium",
    variant: "outline",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=296%3A5345",
    },
    layout: "centered",
  },
} as Meta<typeof ButtonUI>;

const Template: StoryFn<typeof ButtonUI> = (args: ButtonUIProps) => (
  <ButtonUI {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Hover = Template.bind({});
Hover.args = {};
