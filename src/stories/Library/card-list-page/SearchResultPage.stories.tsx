import { Meta, StoryFn } from "@storybook/react";
import { SearchResultPage } from "./SearchResultPage";
import { SearchResultPageSkeleton } from "./SearchResultPageSkeleton";

export default {
  title: "Blocks / Search Result Page",
  component: SearchResultPage,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  argTypes: {
    title: { control: { type: "text" } },
    totalResults: { control: { type: "number" } },
    linkName: { control: { type: "text" } },
    linkTotalResults: { control: { type: "text" } },
    currentResults: { control: { type: "number" } },
    zeroResult: { control: { type: "boolean" } },
  },
  args: {
    title: "harry potter",
    totalResults: 3576,
    linkName: "bibliotekets hjemmeside",
    linkTotalResults: "8",
    currentResults: 10,
    zeroResult: false,
  },
} as Meta<typeof SearchResultPage>;

const Template: StoryFn<typeof SearchResultPage> = (args) => {
  return <SearchResultPage {...args} />;
};
export const Item = Template.bind({});

const SkeletonTemplate: StoryFn<typeof SearchResultPageSkeleton> = (args) => {
  return <SearchResultPageSkeleton {...args} />;
};
export const SkeletonVersion = SkeletonTemplate.bind({});
