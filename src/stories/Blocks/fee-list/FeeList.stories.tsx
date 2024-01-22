import { ComponentMeta, ComponentStory } from "@storybook/react";
import FeeList from "./FeeList";

export default {
  title: "Blocks / Fee List",
  component: FeeList,
} as ComponentMeta<typeof FeeList>;

const Template: ComponentStory<typeof FeeList> = (args) => {
  return <FeeList {...args} />;
};

export const Item = Template.bind({});
