import { StoryFn, Meta } from "@storybook/react";

import { ButtonUI } from "./ButtonUI";

export default {
  title: "Library / Buttons / Button",
  component: ButtonUI,

  argTypes: {
    label: {
      defaultValue: "Se hele kalenderen",
    },
    disabled: {
      defaultValue: false,
    },
    collapsible: {
      defaultValue: false,
    },
    size: {
      defaultValue: "medium",
    },
    variant: {
      defaultValue: "outline",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=296%3A5345",
    },
    layout: "centered",
  },
} as Meta<typeof ButtonUI>;

const Template: StoryFn<typeof ButtonUI> = (args) => <ButtonUI {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Hover = Template.bind({});
Hover.args = {};
