import { ComponentMeta, ComponentStory } from "@storybook/react";
import ContentList from "./ContentList";
import contentListData from "./ContentListData";

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
} as ComponentMeta<typeof ContentList>;
const Template: ComponentStory<typeof ContentList> = (args) => (
  <ContentList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: contentListData,
};
