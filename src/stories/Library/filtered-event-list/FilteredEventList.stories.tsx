import { Meta, StoryFn } from "@storybook/react-webpack5";
import FilteredEventList from "./FilteredEventlist";
import FilteredListData from "./FilteredEventListData";

export default {
  title: "Library/ Filtered Event List",
  component: FilteredEventList,
  argTypes: {
    title: {
      control: "text",
      description: "Title of the recommendation",
    },
    events: {
      control: "object",
      description: "List of events to be displayed",
    },
    buttonText: {
      control: "text",
      description: "Text for the button",
    },
    buttonShowLessText: {
      control: "text",
      description: "Text for the button",
    },
  },
  args: {
    title: "Aktiviteter på biblioteket",
    events: FilteredListData,
    buttonText: "Se alle",
    buttonShowLessText: "Se færre",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7567-80202&mode=design&t=eZs7Tgx4a1ebZQiO-4",
    },
  },
} as Meta<typeof FilteredEventList>;

const Template: StoryFn<typeof FilteredEventList> = (args) => (
  <FilteredEventList {...args} />
);

export const FilteredList = Template.bind({});
