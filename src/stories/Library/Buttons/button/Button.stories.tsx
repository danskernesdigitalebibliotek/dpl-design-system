import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Button } from "./Button";

export default {
  title: "Library / Buttons / Button",
  component: Button,
  decorators: [withDesign],
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "default",
  buttonType: "default",
};

export const Hover = Template.bind({});
Hover.args = {
  label: "hover state",
  buttonType: "default",
};
Hover.parameters = {
  pseudo: { hover: true },
};

export const Focus = Template.bind({});
Focus.args = {
  label: "focus state",
  buttonType: "default",
};
Focus.parameters = {
  pseudo: { focusVisible: true },
};

export const Active = Template.bind({});
Active.args = {
  label: "active state",
  variant: "filled",
};
Active.parameters = {
  pseudo: { active: true },
};

export const External = Template.bind({});
External.args = {
  label: "external link",
  buttonType: "external-link",
};

export const Search = Template.bind({});
Search.args = {
  label: "se alle søgeresultater",
  buttonType: "search",
};

export const Filled = Template.bind({});
Filled.args = {
  label: "filled variant",
  variant: "filled",
};

// TODO: Not sure what this Collapsible is intended for?
export const Collapsible = Template.bind({});
Collapsible.args = {
  label: "Collapsible",
  collapsible: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Default disabled",
  buttonType: "default",
  disabled: true,
};

export const FilledDisabled = Template.bind({});
FilledDisabled.args = {
  label: "Filled disabled",
  variant: "filled",
  disabled: true,
};
