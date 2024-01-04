import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Card from "./Card";
import ImageCredited from "../image-credited/ImageCredited";

export default {
  title: "Library / Card ('news card')",
  component: Card,
  decorators: [withDesign],
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
    placeholderText: {
      defaultValue: "Stine Pilgaard vinder De Gyldne Laurbær",
      type: "string",
    },
    href: {
      defaultValue: "https://google.com",
      type: "string",
    },
    image: {
      defaultValue: (
        <ImageCredited src="https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      ),

      type: "string",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=1968-8159&mode=design&t=8uX61DMzCXLhbNod-4",
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

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

export { XLarge, XLargeNoImage, Large, LargeNoImage };
