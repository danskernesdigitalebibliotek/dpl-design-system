import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Accordion, { AccordionProps } from "./Accordion";
import list from "./accordionList";

export default {
  title: "Library / Accordion",
  component: Accordion,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1357%3A9754",
    },
    layout: "padded",
  },
  argTypes: {
    list: {
      defaultValue: list,
    },
  },
};

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
