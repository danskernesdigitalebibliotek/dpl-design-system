import { StoryFn, Meta } from "@storybook/react-webpack5";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Library / Buttons / Button",
  component: Button,
  argTypes: {
    buttonType: { control: "select" },
    label: { control: "text" },
    disabled: { control: "boolean" },
    collapsible: { control: "boolean" },
    size: { control: "select" },
    variant: { control: "select" },
  },
  args: {
    buttonType: "none",
    label: "Se hele kalenderen",
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
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

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
