import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Pagefold as PagefoldComp } from "./Pagefold";

type PagefoldProps = typeof PagefoldComp;

export default {
  title: "Atoms / Pagefold",
  component: PagefoldComp,
  decorators: [withDesign],
  argTypes: {
    inherit: {
      defaultValue: false,
    },
    container: {
      defaultValue: true,
    },
    size: {
      defaultValue: "medium",
    },
    classes: {
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
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1354%3A7941",
    },
  },
} as ComponentMeta<typeof PagefoldComp>;

const Template: ComponentStory<typeof PagefoldComp> = (args) => (
  <PagefoldComp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  inherit: false,
};

export const Inherit = Template.bind({});
Inherit.args = {
  inherit: true,
};
