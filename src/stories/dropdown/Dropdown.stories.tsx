import React from "react";
import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Dropdown as DropdownComp } from "./Dropdown";

type DropdownProps = typeof DropdownComp;

export default {
  title: "DPL Design System / Dropdown",
  component: DropdownComp,
  decorators: [withDesign],
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=836%3A5757",
  },
};

const Template: ComponentStory<DropdownProps> = (args) => (
  <DropdownComp {...args} />
);

const list = [
  {
    title: "Bob Dylan 80 år",
    href: "/",
  },
  {
    title: "5 Nordiske fuldtræffere",
    href: "/",
  },
  {
    title: "Familien Bridgerton",
    href: "/",
  },
  {
    title: "Bøger til din ferie",
    href: "/",
  },
  {
    title: "Læs dig gennem Danmark",
    href: "/",
  },
];

export const Dropdown = Template.bind({});
Dropdown.args = {
  list,
};
