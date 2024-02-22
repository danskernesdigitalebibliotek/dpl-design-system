import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentListPage from "./ContentListPage";

export default {
  title: "Blocks/List Page",
  component: ContentListPage,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7527-54179&mode=dev",
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ContentListPage>;

const Template: ComponentStory<typeof ContentListPage> = () => <ContentListPage />;

export const Default = Template.bind({});
