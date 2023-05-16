import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CardListPage } from "./CardListPage";
import { CardListPageSkeleton } from "./CardListPageSkeleton";

export default {
  title: "Blocks / Card list Page",
  component: CardListPage,
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
} as ComponentMeta<typeof CardListPage>;

const Template: ComponentStory<typeof CardListPage> = (args) => {
  return <CardListPage {...args} />;
};
export const Item = Template.bind({});

const SkeletonTemplate: ComponentStory<typeof CardListPageSkeleton> = (
  args
) => {
  return <CardListPageSkeleton {...args} />;
};
export const SkeletonVersion = SkeletonTemplate.bind({});
