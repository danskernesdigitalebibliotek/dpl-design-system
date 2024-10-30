import { StoryFn, Meta } from "@storybook/react";

import Card from "./Card";
import CardImages from "./CardImages";

export default {
  title: "Library / Card ('news card')",
  component: Card,

  argTypes: {
    variant: {
      // Disabling controls, as the different variations are added already.
      control: false,
    },
    typeTag: {
      defaultValue: "Arrangement",
      type: "string",
    },
    dateTag: {
      defaultValue: "06 Dec 2022",
      type: "string",
    },
    title: {
      defaultValue: "Bøger som har gjort en forskel for romanens udvikling",
      type: "string",
    },
    href: {
      defaultValue: "https://google.com",
      type: "string",
    },
    image: {
      defaultValue: (
        <CardImages
          src="images/card_original.jpg"
          alternativeSrcs={[
            { name: "x-large", src: "images/card_x_large.jpg" },
            { name: "large", src: "images/card_large.jpg" },
            { name: "medium", src: "images/card_medium.jpg" },
          ]}
        />
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
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=1968-8159&mode=design&t=8uX61DMzCXLhbNod-4",
    },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

const XLarge = Template.bind({});

XLarge.args = {
  variant: "x-large",
};

const XLargeNoImage = Template.bind({});
XLargeNoImage.args = {
  variant: "x-large",
  image: undefined,
};

const Large = Template.bind({});
Large.args = {
  variant: "large",
};

const LargeNoImage = Template.bind({});
LargeNoImage.args = {
  variant: "large",
  image: undefined,
};

const Medium = Template.bind({});
Medium.args = {
  variant: "medium",
};

const MediumNoImage = Template.bind({});
MediumNoImage.args = {
  variant: "medium",
  image: undefined,
};

const Small = Template.bind({});
Small.args = {
  variant: "small",
};

const SmallNoImage = Template.bind({});
SmallNoImage.args = {
  variant: "small",
  image: undefined,
};

export {
  XLarge,
  XLargeNoImage,
  Large,
  LargeNoImage,
  Medium,
  MediumNoImage,
  Small,
  SmallNoImage,
};
