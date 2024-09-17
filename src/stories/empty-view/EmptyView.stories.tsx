import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmptyView from "./EmptyView";

export default {
  title: "Library / Empty view",
  component: EmptyView,
} as ComponentMeta<typeof EmptyView>;

const Template: ComponentStory<typeof EmptyView> = () => <EmptyView />;

export const Default = Template.bind({});
