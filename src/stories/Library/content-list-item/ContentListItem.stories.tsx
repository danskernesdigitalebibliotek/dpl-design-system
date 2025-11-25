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

export const TemplateEvent: StoryFn<typeof ContentListItem> = (args) => (
  <ContentListItem {...args} />
);

const TemplateArticle: StoryFn<typeof ContentListItem> = () => (
  <ContentListItem
    {...{
      href: "#",
      tagText: "True Crime",
      title: "Peter Plys og honning-kuppet",
      publicationDate: "15 Maj 2025",
      description:
        "Da honningen tog overhånd - en historie om Peter Plys og hans fald ind i afhængighedens mørke væsen.",
      image: (
        <ImageCredited src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b2xlbiUyMGhvbmV5fGVufDB8fDB8fHww" />
      ),
    }}
  />
);

const TemplateBranch: StoryFn<typeof ContentListItem> = () => (
  <ContentListItem
    {...{
      href: "#",
      title: "Hovedbiblioteket",
      description: "Krystalgade 15, 1172 København K, Danmark",
      image: (
        <ImageCredited src="https://plus.unsplash.com/premium_photo-1661875977781-adbb21036841?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" />
      ),
    }}
  />
);

export const Event = TemplateEvent.bind({});
export const Article = TemplateArticle.bind({});
export const Branch = TemplateBranch.bind({});
