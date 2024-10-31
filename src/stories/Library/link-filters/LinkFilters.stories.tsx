import { Meta, StoryFn } from "@storybook/react";

import { LinkFilters } from "./LinkFilters";

export default {
  title: "Library / Links / Link filters",
  component: LinkFilters,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=274%3A7545",
    },
    layout: "centered",
  },
} as Meta<typeof LinkFilters>;

const Template: StoryFn<typeof LinkFilters> = (args) => (
  <LinkFilters {...args} />
);

export const Item = Template.bind({});
Item.args = {
  filters: [
    {
      title: "Foredrag",
      href: "/",
      counter: "24",
    },
    {
      title: "Børn",
      href: "/",
      counter: "16",
    },
    {
      title: "Kunst og kreativitet",
      href: "/",
      counter: "7",
    },
    {
      title: "Bøger til din ferie",
      href: "/",
      counter: "48",
    },
    {
      title: "Læs dig gennem danmark",
      href: "/",
      counter: "14",
    },
  ],
};
