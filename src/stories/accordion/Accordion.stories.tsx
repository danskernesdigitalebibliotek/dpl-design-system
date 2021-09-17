import React from "react";
import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Accordion as AccordionComp } from "./Accordion";

type AccordionProps = typeof AccordionComp;

export default {
  title: "DPL Design System / Accordion",
  component: AccordionComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1357%3A9754",
    },
  },
};

const Template: ComponentStory<AccordionProps> = (args) => (
  <AccordionComp {...args} />
);

const list = ["Om Bibliotekerne", "Online tilbud", "Kontakt"].map((header) => ({
  header,
  content: [
    {
      title: "Brug bibliotekerne",
      href: "/",
    },
    {
      title: "Erstatninger og gebyrer",
      href: "/",
    },
    {
      title: "Opret bruger",
      href: "/",
    },
    {
      title: "Biblioteket - A til Å",
      href: "/",
    },
    {
      title: "Internetadgang",
      href: "/",
    },
    {
      title: "Print, scan og kopi",
      href: "/",
    },
    {
      title: "Booking af lokaler",
      href: "/",
    },
    {
      title: "Nyhedsbrev",
      href: "/",
    },
  ],
}));

export const Accordion = Template.bind({});
Accordion.args = {
  list,
};
