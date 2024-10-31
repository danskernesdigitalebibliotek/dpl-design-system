import { StoryFn, Meta } from "@storybook/react";

import HeroLink from "./HeroLink";
import ImageCredited from "../../image-credited/ImageCredited";

export default {
  title: "Library / Hero with link",
  component: HeroLink,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39243&mode=dev",
    },
  },
  argTypes: {
    url: {
      name: "Url",
      control: { type: "text" },
    },
    image: {
      control: { type: "object" },
    },
    placeholderText: {
      control: { type: "text" },
    },
    contentType: {
      name: "Type",
      control: { type: "text" },
    },
    date: {
      name: "Date",
      control: { type: "text" },
    },
    title: {
      name: "Title",
      control: { type: "text" },
    },
    description: {
      name: "Description",
      control: { type: "text" },
    },
  },
  args: {
    url: "#",
    image: (
      <ImageCredited
        src="https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnR8fHx8fHwxNzAyOTEwMzE0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        description="Photo by Unsplash"
        year="©2021"
      />
    ),
    placeholderText: "En spændende tekst",
    contentType: "Arrangement",
    date: "06 Dec 2022",
    title: "Stine Pilgaard vinder De Gyldne Laurbær",
    description:
      "Boghandlernes store bogpris - De Gyldne går denne gang til Stine Pilgaard for hendes roman 'Meter i sekundet'. Stort tillykke til Stine Pilgaard.",
  },
} as Meta<typeof HeroLink>;

const Template: StoryFn<typeof HeroLink> = (args) => <HeroLink {...args} />;

export const Default = Template.bind({});
