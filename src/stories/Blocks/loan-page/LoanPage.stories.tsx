import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import LoanPage, { LoanPageProps } from "./LoanPage";

export default {
  title: "Blocks / Loan Page",
  component: LoanPage,
  decorators: [withDesign],
  argTypes: {
    headline: {
      name: "Headline",
      defaultValue: "Your loans",
      control: { type: "text" },
    },
    physicalLoans: {
      name: "Physical loans amount",
      defaultValue: 2,
      control: { type: "number" },
    },
    digitalLoans: {
      name: "Digital loans amount",
      defaultValue: 2,
      control: { type: "number" },
    },
    skeletonVersion: {
      name: "Is skeleton version?",
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=8513%3A85522&mode=design&t=Ms5I0A8fq9bNeuSJ-1",
    },
  },
};

const Template: ComponentStory<typeof LoanPage> = (args: LoanPageProps) => (
  <LoanPage {...args} />
);

export const Default = Template.bind({});
export const NoPhysicalLoans = Template.bind({});
NoPhysicalLoans.args = {
  physicalLoans: 0,
};
export const NoDigitalLoans = Template.bind({});
NoDigitalLoans.args = {
  digitalLoans: 0,
};
export const NoLoansAtAll = Template.bind({});
NoLoansAtAll.args = {
  physicalLoans: 0,
  digitalLoans: 0,
};
export const SkeletonVersion = Template.bind({});
SkeletonVersion.args = {
  skeletonVersion: true,
};
