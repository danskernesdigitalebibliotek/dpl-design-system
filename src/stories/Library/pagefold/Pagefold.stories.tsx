import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Pagefold as PagefoldComp } from "./Pagefold";

export default {
  title: "Library / Pagefold",
  component: PagefoldComp,
  decorators: [withDesign],
  argTypes: {
    isInheriting: {
      defaultValue: false,
    },
    isAContainer: {
      defaultValue: true,
    },
    size: {
      defaultValue: "medium",
    },
    className: {
      // Only used internally
      control: {
        disable: true,
      },
    },
    compProps: {
      // Only used internally
      control: {
        disable: true,
      },
    },
    type: {
      control: {
        defaultValue: undefined,
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1354%3A7941",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof PagefoldComp>;

const Template: ComponentStory<typeof PagefoldComp> = (args) => (
  <PagefoldComp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isInheriting: false,
};

export const Inherit = Template.bind({});
Inherit.args = {
  isInheriting: true,
};
