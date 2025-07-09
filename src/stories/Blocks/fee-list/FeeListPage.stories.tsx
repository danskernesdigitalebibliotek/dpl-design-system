import { Meta, StoryFn } from "@storybook/react-webpack5";
import FeeListPage from "./FeeListPage";

export default {
  title: "Blocks / Fee List",
  component: FeeListPage,
} as Meta<typeof FeeListPage>;

const Template: StoryFn<typeof FeeListPage> = (args) => {
  return <FeeListPage {...args} />;
};

export const Default = Template.bind({});

export const SkeletonVersion = Template.bind({});
SkeletonVersion.args = {
  skeletonVersion: true,
};
