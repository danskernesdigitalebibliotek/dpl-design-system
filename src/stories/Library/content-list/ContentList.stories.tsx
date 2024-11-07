import { Meta, StoryFn } from "@storybook/react";
import ContentList from "./ContentList";
import ContentListData from "./ContentListData";

export default {
  title: "Library / Content List",
  component: ContentList,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7527-54179&mode=dev",
    },
    layout: "fullscreen",
  },
} as Meta<typeof ContentList>;
const Template: StoryFn<typeof ContentList> = (args) => (
  <ContentList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: ContentListData,
};
