import { StoryFn, Meta } from "@storybook/react-webpack5";

import Hero from "./Hero";
import ImageCredited from "../image-credited/ImageCredited";

const defaultArgs = {
  image: (
    <ImageCredited
      src="https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnR8fHx8fHwxNzAyOTEwMzE0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
      description="Photo by Unsplash"
      year="©2021"
    />
  ),
  type: "Type",
  date: "30. december 2025",
  title: "Stine Pilgaard vinder De Gyldne Laurbær",
  description:
    "Boghandlernes store bogpris - De Gyldne går denne gang til Stine Pilgaard for hendes roman 'Meter i sekundet'. Stort tillykke til Stine Pilgaard.",
  items: [
    {
      label: "Tid",
      values: ["19:30 - 21:00"],
    },
    {
      label: "Pris",
      values: ["Børn: Gratis", "Voksne: 65 DKK"],
    },
    {
      label: "Sted",
      values: [
        "Café Mors Varme Hænder",
        "Rentemestervej 76",
        "2400 København NV",
      ],
    },
  ],
  cta: "Køb billet",
  tag: "Arrangement",
  url: "#",
  placeholderText: "Intet billede",
};

export default {
  title: "Library / Hero",
  component: Hero,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/IDDOM18MgAWnrrKeaLKxK5/Arrangement?node-id=2625-4323&t=QP3v5mqixzRCs9of-4",
    },
  },
  args: defaultArgs,
  excludeStories: ["EventArgs", "ParagraphArgs", "PageArgs"],
} as Meta<typeof Hero>;

const Template: StoryFn<typeof Hero> = (args) => <Hero {...args} />;

export const Event = Template.bind({});
export const Paragraph = Template.bind({});
export const Page = Template.bind({});

export const EventArgs = {
  ...defaultArgs,
  description: undefined,
  type: undefined,
};

export const ParagraphArgs = {
  ...defaultArgs,
  cta: undefined,
  items: undefined,
  date: undefined,
};

export const PageArgs = {
  ...defaultArgs,
  url: undefined,
  tag: undefined,
  items: undefined,
  date: undefined,
  image: undefined,
};

Event.args = EventArgs;
Paragraph.args = ParagraphArgs;
Page.args = PageArgs;
