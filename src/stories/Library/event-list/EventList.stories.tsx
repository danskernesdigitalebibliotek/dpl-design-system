import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventList from "./EventList";
import eventListData from "./EventListData";

export default {
  title: "Library / Event List",
  component: EventList,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7527-54179&mode=dev",
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof EventList>;
const Template: ComponentStory<typeof EventList> = (args) => (
  <EventList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  events: eventListData,
};
