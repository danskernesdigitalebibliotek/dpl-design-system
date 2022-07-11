import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Accordion as AccordionComp } from "./Accordion";
import { list } from "./accordionList";

type AccordionProps = typeof AccordionComp;

export default {
  title: "Library / Accordion",
  component: AccordionComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1357%3A9754",
    },
  },
  argTypes: {
    list: {
      defaultValue: list,
    },
  },
};

const Template: ComponentStory<AccordionProps> = (args) => (
  <AccordionComp {...args} />
);

export const Accordion = Template.bind({});
