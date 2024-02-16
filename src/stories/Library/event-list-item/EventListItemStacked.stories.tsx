import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import EventListItemStacked from "./EventListItemStacked";

export default {
  title: "Library / Event List Item Stacked",
  component: EventListItemStacked,
  decorators: [withDesign],
  argTypes: {
    schedule: {
      defaultValue: [
        { date: "01 Feb 2023", time: "19:30 - 21:00" }, // This will be ignored since the date will be displayed in an EventListItem.
        { date: "05 Feb 2023", time: "19:30 - 21:00" },
        { date: "15 Feb 2023", time: "19:30 - 21:00" },
      ],
      control: { type: "object" },
    },
    href: {
      defaultValue: "/",
      control: { type: "text" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
    layout: "full",
  },
} as ComponentMeta<typeof EventListItemStacked>;

const Template: ComponentStory<typeof EventListItemStacked> = (args) => (
  <EventListItemStacked {...args} />
);

export const Default = Template.bind({});
