import { Meta, StoryFn } from "@storybook/react-webpack5";

import { ListDetails } from "./ListDetails";

export default {
  title: "Library / Lists / Details",
  component: ListDetails,

  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1385%3A8923",
    },
  },
} as Meta<typeof ListDetails>;

const Template: StoryFn<typeof ListDetails> = (args) => (
  <ListDetails {...args} />
);

export const Item = Template.bind({});
Item.args = {
  title: "Afleveres",
  date: "31.11.21",
  icon: "icons/collection/Ebook.svg",
};

export const ItemLink = Template.bind({});
ItemLink.args = {
  title: "Har ingen interesse efter",
  date: "6 måneder",
  icon: "icons/collection/Ebook.svg",
  link: {
    label: "Skift",
    url: window.location.href,
  },
};

export const ItemDropdown = Template.bind({});
ItemDropdown.args = {
  title: "Afleveres",
  date: "31.11.21",
  icon: "icons/collection/Ebook.svg",
  menu: {
    ariaLabel: "dropdown",
    arrowIcon: "chevron",
    list: [
      {
        href: "",
        title: "Default state",
      },
    ],
  },
};
