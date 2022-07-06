import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Links as LinksComp } from "./Links";

export default {
  title: "Library / Links / Text link",
  component: LinksComp,
  decorators: [withDesign],
  argTypes: {
    href: {
      defaultValue: "/",
    },
    linkText: {
      defaultValue: "Hello world",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=2%3A4",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof LinksComp>;

const Template: ComponentStory<typeof LinksComp> = (args) => (
  <LinksComp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: "/",
  linkText: "Hello world",
};
