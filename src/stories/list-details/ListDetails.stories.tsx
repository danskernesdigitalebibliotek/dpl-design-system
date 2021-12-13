import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListDetails } from "./ListDetails";

export default {
  title: "Components / List - Details",
  component: ListDetails,
  decorators: [withDesign],
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof ListDetails>;

const Template: ComponentStory<typeof ListDetails> = (args) => (
  <ListDetails {...args} />
);

export const Item = Template.bind({});
Item.args = {
  title: "Afleveres",
  date: "31.11.21",
};

export const ItemLink = Template.bind({});
ItemLink.args = {
  title: "Har ingen interesse efter",
  date: "6 måneder",
  link: {
    label: "Skift",
    url: window.location.href,
  },
};

export const ItemDropdown = Template.bind({});
ItemDropdown.args = {
  title: "Afleveres",
  date: "31.11.21",
  menu: {
    ariaLabel: "dropdown",
    list: [
      {
        href: "",
        title: "Default state",
      },
    ],
  },
};
