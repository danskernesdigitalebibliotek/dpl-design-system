import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventList from "./EventList";

export default {
  title: "Blocks / Event List",
  component: EventList,
} as ComponentMeta<typeof EventList>;

const Template: ComponentStory<typeof EventList> = () => <EventList />;

export const Default = Template.bind({});
