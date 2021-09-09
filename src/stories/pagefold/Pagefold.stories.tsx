import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Pagefold as PagefoldComp } from "./Pagefold";

type PagefoldProps = typeof PagefoldComp;

export default {
  title: "DPL Design System / Pagefold",
  component: PagefoldComp,
  decorators: [withDesign],
  argTypes: {
    inherit: {
      defaultValue: false,
    },
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=10%3A395",
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
