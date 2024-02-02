import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoanList from "./LoanList";

export default {
  title: "Blocks / Loan List",
  component: LoanList,
} as ComponentMeta<typeof LoanList>;

const Template: ComponentStory<typeof LoanList> = (args) => {
  return <LoanList {...args} />;
};

export const Item = Template.bind({});
