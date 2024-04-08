import { ComponentMeta, ComponentStory } from "@storybook/react";
import FeeListPage from "./FeeListPage";

export default {
  title: "Blocks / Fee List",
  component: FeeListPage,
} as ComponentMeta<typeof FeeListPage>;

const Template: ComponentStory<typeof FeeListPage> = (args) => {
  return <FeeListPage {...args} />;
};

export const Default = Template.bind({});

export const SkeletonVersion = Template.bind({});
SkeletonVersion.args = {
  skeletonVersion: true,
};
