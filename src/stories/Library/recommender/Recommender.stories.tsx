import { ComponentMeta, ComponentStory } from "@storybook/react";

import Recommender from "./Recommender";

export default {
  title: "Library / Recommender",
  component: Recommender,
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof Recommender>;

const Template: ComponentStory<typeof Recommender> = (args) => (
  <Recommender {...args} />
);

export const Recommend = Template.bind({});
Recommend.args = {};
