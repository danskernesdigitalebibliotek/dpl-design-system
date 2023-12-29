import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Dropdown as DropdownComp } from "./Dropdown";

type DropdownProps = typeof DropdownComp;

export default {
  title: "Library / Dropdown",
  component: DropdownComp,
  decorators: [withDesign],
  argTypes: {
    arrowIcon: {
      defaultValue: "triangles",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=274%3A6642",
    },
    layout: "padded",
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
  {
    title:
      "En mega lang titel skal helst have ellipsis en mega lang titel skal helst have ellipsis en mega lang titel skal helst have ellipsis en mega lang titel skal helst have ellipsis en mega lang titel skal helst have ellipsis en mega lang titel skal helst have ellipsis",
    href: "/",
  },
];

export const Dropdown = Template.bind({});
Dropdown.args = {
  list,
  ariaLabel: "Dropdown with different artists",
  arrowIcon: "triangles",
};
