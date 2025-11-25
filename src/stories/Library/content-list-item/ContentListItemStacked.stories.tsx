import { StoryFn, Meta } from "@storybook/react-webpack5";

import ContentListItemStacked from "./ContentListItemStacked";
import { ContentListItemStatuses } from "../content-list-item-status/ContentListItemStatus";
import { ContentListItem } from "./ContentListItem";
import ImageCredited from "../image-credited/ImageCredited";

export default {
  title: "Library / Content List Item Stacked",
  component: ContentListItemStacked,
  argTypes: {
    title: { control: { type: "text" } },
    date: { control: { type: "text" } },
    time: { control: { type: "text" } },
    href: { control: { type: "text" } },
  },
  args: {
    title: "Hidden Title",
    date: "01 Feb 2023",
    time: "19:30 - 21:00",
    location: "Kulturhuset",
    status: undefined,
    href: "/",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=13701-3367&mode=design&t=yJCbrISIEY34WPBj-4",
    },
    layout: "full",
  },
} as Meta<typeof ContentListItemStacked>;

const TemplateWithParent: StoryFn<typeof ContentListItemStacked> = (args) => (
  <>
    <ContentListItem
      {...args}
      tagText="Foredrag"
      title="Ny indsamling til Læs for livet"
      description="Demokrati betyder helt enkelt folkestyre og er en måde at fordele magten i fx et land"
      price="80 KR"
      image={
        <ImageCredited src="https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      }
    />
    <ContentListItemStacked {...args} />
  </>
);

const Template: StoryFn<typeof ContentListItemStacked> = (args) => (
  <ContentListItemStacked {...args} />
);

export const Default = Template.bind({});

export const WithStatus = Template.bind({});
WithStatus.args = {
  status: ContentListItemStatuses.OCCURRED,
};

export const WithParent = TemplateWithParent.bind({});
WithParent.args = {
  status: ContentListItemStatuses.CANCELLED,
};
