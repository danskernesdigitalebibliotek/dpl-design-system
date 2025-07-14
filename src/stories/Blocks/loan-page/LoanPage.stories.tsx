import { StoryFn } from "@storybook/react-webpack5";

import LoanPage, { LoanPageProps } from "./LoanPage";

export default {
  title: "Blocks / Loan Page",
  component: LoanPage,
  argTypes: {
    headline: {
      name: "Headline",
      control: { type: "text" },
    },
    isStacked: {
      name: "Is stacked?",
      control: { type: "boolean" },
    },
    physicalLoans: {
      name: "Physical loans amount",
      control: { type: "number" },
    },
    digitalLoans: {
      name: "Digital loans amount",
      control: { type: "number" },
    },
    skeletonVersion: {
      name: "Is skeleton version?",
      control: { type: "boolean" },
    },
  },
  args: {
    headline: "Your loans",
    isStacked: false,
    physicalLoans: 2,
    digitalLoans: 2,
    skeletonVersion: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=8513%3A85522&mode=design&t=Ms5I0A8fq9bNeuSJ-1",
    },
  },
};

const Template: StoryFn<typeof LoanPage> = (args: LoanPageProps) => (
  <LoanPage {...args} />
);

export const Default = Template.bind({});
export const Stacked = Template.bind({});
Stacked.args = {
  isStacked: true,
};
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
