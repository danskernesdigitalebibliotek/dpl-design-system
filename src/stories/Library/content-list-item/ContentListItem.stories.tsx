import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { ContentListItem } from "./ContentListItem";
import ImageCredited from "../image-credited/ImageCredited";

export default {
  title: "Library / Content List Item",
  component: ContentListItem,
  decorators: [withDesign],
  argTypes: {
    tagText: {
      defaultValue: "Foredrag",
      control: { type: "text" },
    },
    title: {
      defaultValue: "Ny indsamling til Læs for livet",
      control: { type: "text" },
    },
    description: {
      defaultValue:
        "Demokrati betyder helt enkelt folkestyre og er en måde at fordele magten i fx et land",
      control: { type: "text" },
    },
    date: {
      defaultValue: "25 Feb 2023",
      control: { type: "text" },
    },
    time: {
      defaultValue: "19:30 - 21:00",
      control: { type: "text" },
    },
    location: {
      defaultValue: "Stadsbiblioteket",
      control: { type: "text" },
    },
    price: {
      defaultValue: "80 KR",
      control: { type: "number" },
    },
    href: {
      defaultValue: "/",
      control: { type: "text" },
    },
    image: {
      defaultValue: (
        <ImageCredited src="https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      ),
    },
    placeholderText: {
      defaultValue: "Stine Pilgaard vinder De Gyldne Laurbær",
      type: "string",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7690-56463&mode=design&t=RCEb5jOu9CS9Ui9x-4",
    },
    layout: "full",
  },
} as ComponentMeta<typeof ContentListItem>;

const Template: ComponentStory<typeof ContentListItem> = (args) => (
  <ContentListItem {...args} />
);

export const Default = Template.bind({});
