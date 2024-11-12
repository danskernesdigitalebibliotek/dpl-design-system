import { StoryFn, Meta } from "@storybook/react";
import ContentListPage from "./ContentListPage";

export default {
  title: "Blocks/Content List Page",
  component: ContentListPage,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7527-54179&mode=dev",
    },
    layout: "fullscreen",
  },
} as Meta<typeof ContentListPage>;

const Template: StoryFn<typeof ContentListPage> = () => <ContentListPage />;

export const Default = Template.bind({});
