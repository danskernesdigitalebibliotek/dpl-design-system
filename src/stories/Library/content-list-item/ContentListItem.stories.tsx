import { StoryFn, Meta } from "@storybook/react-webpack5";
import { ContentListItem } from "./ContentListItem";
import ImageCredited from "../image-credited/ImageCredited";

export default {
  title: "Library / Content List Item",
  component: ContentListItem,
  argTypes: {
    tagText: { control: { type: "text" } },
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    date: { control: { type: "text" } },
    time: { control: { type: "text" } },
    location: { control: { type: "text" } },
    price: { control: { type: "text" } },
    href: { control: { type: "text" } },
    image: { control: { type: "object" } },
    placeholderText: { control: { type: "text" } },
  },
  args: {
    tagText: "Foredrag",
    title: "Ny indsamling til Læs for livet",
    description:
      "Demokrati betyder helt enkelt folkestyre og er en måde at fordele magten i fx et land",
    date: "25 Feb 2023",
    time: "19:30 - 21:00",
    location: "Stadsbiblioteket",
    price: "80 KR",
    href: "/",
    image: (
      <ImageCredited src="https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
    placeholderText: "Stine Pilgaard vinder De Gyldne Laurbær",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7690-56463&mode=design&t=RCEb5jOu9CS9Ui9x-4",
    },
    layout: "full",
  },
} as Meta<typeof ContentListItem>;

const Template: StoryFn<typeof ContentListItem> = (args) => (
  <ContentListItem {...args} />
);

export const Default = Template.bind({});
