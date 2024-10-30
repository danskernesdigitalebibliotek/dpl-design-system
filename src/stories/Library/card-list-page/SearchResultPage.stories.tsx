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
    title: {
      control: { type: "text" },
      defaultValue: "harry potter",
    },
    totalResults: {
      control: { type: "number" },
      defaultValue: 3576,
    },
    linkName: {
      control: { type: "text" },
      defaultValue: "bibliotekets hjemmeside",
    },
    linkTotalResults: {
      control: { type: "text" },
      defaultValue: "8",
    },
    currentResults: {
      control: { type: "number" },
      defaultValue: 10,
    },

    zeroResult: {
      control: { type: "boolean" },
      defaultValue: false,
    },
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
