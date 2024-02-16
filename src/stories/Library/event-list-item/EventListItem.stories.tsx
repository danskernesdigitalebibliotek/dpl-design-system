import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { EventListItem } from "./EventListItem";

export default {
  title: "Library / Event List Item",
  component: EventListItem,
  decorators: [withDesign],
  argTypes: {
    image: {
      defaultValue:
        "https://plus.unsplash.com/premium_photo-1696886122527-e4303b76aa8f?q=80&w=5156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      control: { type: "text" },
    },
    tagText: {
      defaultValue: "Foredrag",
      control: { type: "text" },
    },
    title: {
      defaultValue: "Ny indsamling til Læs for livet",
      control: { type: "text" },
    },
    description: {
      defaultValue:
        "Demokrati betyder helt enkelt folkestyre og er en måde at fordele magten i fx et land",
      control: { type: "text" },
    },
    schedule: {
      defaultValue: [{ date: "25 Feb 2023", time: "19:30 - 21:00" }],
      control: { type: "object" },
    },
    location: {
      defaultValue: "Stadsbiblioteket",
      control: { type: "text" },
    },
    price: {
      defaultValue: "80 KR",
      control: { type: "number" },
    },
    href: {
      defaultValue: "/",
      control: { type: "text" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7690-56463&mode=design&t=RCEb5jOu9CS9Ui9x-4",
    },
    layout: "full",
  },
} as ComponentMeta<typeof EventListItem>;

const Template: ComponentStory<typeof EventListItem> = (args) => (
  <EventListItem {...args} />
);

export const Default = Template.bind({});
