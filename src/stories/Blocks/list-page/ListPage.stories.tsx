import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListPage from "./ListPage";

export default {
  title: "Blocks/List Page",
  component: ListPage,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7527-54179&mode=dev",
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ListPage>;

const Template: ComponentStory<typeof ListPage> = () => <ListPage />;

export const Default = Template.bind({});
