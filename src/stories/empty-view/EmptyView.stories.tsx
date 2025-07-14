import { StoryFn, Meta } from "@storybook/react-webpack5";
import EmptyView from "./EmptyView";

export default {
  title: "Library / Empty view",
  component: EmptyView,
} as Meta<typeof EmptyView>;

const Template: StoryFn<typeof EmptyView> = () => <EmptyView />;

export const Default = Template.bind({});
