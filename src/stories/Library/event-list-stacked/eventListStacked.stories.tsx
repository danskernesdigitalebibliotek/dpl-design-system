import { Meta, StoryFn } from "@storybook/react";
import EventListStacked from "./EventListStacked";

export default {
  title: "Library/ Stacked Event List",
  component: EventListStacked,
  argTypes: {
    title: {
      control: "text",
      description: "Title of the section",
    },
  },
  args: {
    title: "Kommende arrangementer",
  },
} as Meta<typeof EventListStacked>;

const Template: StoryFn<typeof EventListStacked> = (args) => (
  <EventListStacked {...args} />
);

export const FilteredList = Template.bind({});
