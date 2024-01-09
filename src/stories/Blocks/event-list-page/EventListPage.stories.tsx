import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventListPage from "./EventListPage";

export default {
  title: "Blocks/Event List Page",
  component: EventListPage,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7527-54179&mode=dev",
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof EventListPage>;

const Template: ComponentStory<typeof EventListPage> = () => <EventListPage />;

export const Default = Template.bind({});
