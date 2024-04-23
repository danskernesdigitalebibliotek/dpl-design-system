import { ComponentMeta, ComponentStory } from "@storybook/react";
import FilteredEventList from "./FilteredEventlist";
import FilteredListData from "./FilteredEventListData";

export default {
  title: "Library/ Filtered Event List",

  component: FilteredEventList,
  argTypes: {
    title: {
      defaultValue: "Aktiviteter på biblioteket",
      control: "text",
      description: "Title of the recommendation",
    },
    events: {
      defaultValue: FilteredListData,
      control: "object",
      description: "List of events to be displayed",
    },
    buttonText: {
      defaultValue: "Se alle",
      control: "text",
      description: "Text for the button",
    },
    buttonShowLessText: {
      defaultValue: "Se færre",
      control: "text",
      description: "Text for the button",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7567-80202&mode=design&t=eZs7Tgx4a1ebZQiO-4",
    },
  },
} as ComponentMeta<typeof FilteredEventList>;

const Template: ComponentStory<typeof FilteredEventList> = (args) => (
  <FilteredEventList {...args} />
);

export const FilteredList = Template.bind({});
