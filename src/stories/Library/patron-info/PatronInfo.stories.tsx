import { Meta, StoryFn } from "@storybook/react";

import PatronInfo from "./PatronInfo";
import PatronInfoSkeleton from "./PatronInfoSkeleton";

export default {
  title: "Library / User info",
  component: PatronInfo,
  argTypes: {
    address: { control: "text" },
    nameLabel: { control: "text" },
    addressLabel: { control: "text" },
    name: { control: "text" },
  },
  args: {
    address: "The Utonium Residence, 107 Pokey Oaks South, Townsville, USA",
    nameLabel: "Navn",
    addressLabel: "Adresse",
    name: "Professor Utonium",
  },
  parameters: {},
} as Meta<typeof PatronInfo>;

const Template: StoryFn<typeof PatronInfo> = (props) => (
  <PatronInfo {...props} />
);

export const PatronInfoExample = Template.bind({});

const SkeletonTemplate: StoryFn<typeof PatronInfoSkeleton> = () => (
  <PatronInfoSkeleton />
);

export const PatronInfoSkeletonExample = SkeletonTemplate.bind({});
