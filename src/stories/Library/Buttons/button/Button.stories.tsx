import { StoryFn, Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Library / Buttons / Button",
  component: Button,

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
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "default state",
  buttonType: "none",
  collapsible: true,
};

export const Hover = Template.bind({});
Hover.args = {
  label: "hover state",
  buttonType: "default",
  collapsible: true,
};

export const Search = Template.bind({});
Search.args = {
  label: "se alle søgeresultater",
  buttonType: "search",
};

export const Inactive = Template.bind({});
Inactive.args = {
  label: "inactive state",
  buttonType: "search",
  disabled: true,
};

export const Active = Template.bind({});
Active.args = {
  label: "active state",
  buttonType: "none",
  variant: "filled",
};
