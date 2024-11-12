import { Meta, StoryFn } from "@storybook/react";

import Banner from "./Banner";

export default {
  title: "Library / Banner",
  component: Banner,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=446-6957&t=IWAOniAbcjV2y2Hf-4",
    },
  },
  argTypes: {
    imageSrc: {
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
    link: {
      name: "Link",
      control: { type: "text" },
    },
  },
  args: {
    imageSrc: "images/campaign_cover.jpg",
    title: "Hvad skal jeg <u>høre?</u>",
    description:
      "Om du er dedikeret musiknørd eller moderat musikinteresseret, så er dette siden til dig. Her kan du finde anbefalinger, digitale musikmagasiner, nyheder, musiklitteratur og meget mere.",
    link: "#",
  },
} as Meta<typeof Banner>;

const Template: StoryFn<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

export const NoImage = Template.bind({});
NoImage.args = {
  imageSrc: undefined,
};

export const NoImageOnlyTitle = Template.bind({});
NoImageOnlyTitle.args = {
  title: "Title <u>uden</u> billede",
  imageSrc: undefined,
  description: undefined,
};

export const NoImageOnlyDescription = Template.bind({});
NoImageOnlyDescription.args = {
  title: undefined,
  imageSrc: undefined,
  description:
    "Om du er dedikeret musiknørd eller moderat musikinteresseret, så er dette siden til dig. Her kan du finde anbefalinger, digitale musikmagasiner, nyheder, musiklitteratur og meget mere.",
};

export const WithImageOnlyTitle = Template.bind({});
WithImageOnlyTitle.args = {
  title: "Banner <u>uden</u> beskrivelse",
  description: undefined,
};
export const WithImageOnlyDescription = Template.bind({});
WithImageOnlyDescription.args = {
  description:
    "Om du er dedikeret musiknørd eller moderat musikinteresseret, så er dette siden til dig. Her kan du finde anbefalinger, digitale musikmagasiner, nyheder, musiklitteratur og meget mere.",
};
