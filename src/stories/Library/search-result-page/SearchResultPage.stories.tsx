import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultPageSkeleton } from "../card-list-page/SearchResultPageSkeleton";
import { SearchResultPage } from "../card-list-page/SearchResultPage";

export default {
  title: "Blocks / Search Result Page",
  component: SearchResultPage,
  decorators: [withDesign],
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
} as ComponentMeta<typeof SearchResultPage>;

const Template: ComponentStory<typeof SearchResultPage> = (args) => {
  return <SearchResultPage {...args} />;
};
export const Item = Template.bind({});

const SkeletonTemplate: ComponentStory<typeof SearchResultPageSkeleton> = (
  args
) => {
  return <SearchResultPageSkeleton {...args} />;
};
export const SkeletonVersion = SkeletonTemplate.bind({});
