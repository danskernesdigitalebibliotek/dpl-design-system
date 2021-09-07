import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Button } from "./Button";

export default {
  title: "Example / Button",
  component: Button,
  decorators: [withDesign],
  argTypes: {
    label: {
      defaultValue: "se hele kalenderen",
    },
    disabled: {
      defaultValue: false,
    },
    collapsible: {
      defaultValue: false,
    },
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=296%3A5345",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonType: "default",
  collapsible: true,
};

export const External = Template.bind({});
External.args = {
  buttonType: "external-link",
};

export const Search = Template.bind({});
Search.args = {
  label: "se alle søgeresultater",
  buttonType: "search",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "se alle søgeresultater",
  buttonType: "search",
  disabled: true,
};
