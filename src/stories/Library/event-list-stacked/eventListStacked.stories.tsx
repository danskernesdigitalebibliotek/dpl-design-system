import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventListStacked from "./EventListStacked";

export default {
  title: "Library/ Stacked Event List",

  component: EventListStacked,
  argTypes: {
    title: {
      defaultValue: "Kommende arrangementer",
      control: "text",
      description: "Title of the section",
    },
  },
} as ComponentMeta<typeof EventListStacked>;

const Template: ComponentStory<typeof EventListStacked> = (args) => (
  <EventListStacked {...args} />
);

export const FilteredList = Template.bind({});
