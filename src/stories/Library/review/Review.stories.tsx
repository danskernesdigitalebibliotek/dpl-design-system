import { StoryFn, Meta } from "@storybook/react";

import { Review as ReviewsComp } from "./Review";

export default {
  title: "Library / Review",
  component: ReviewsComp,
  argTypes: {
    numberOfReviews: {
      defaultValue: 1,
      control: { type: "number" },
    },
    meta: {
      defaultValue: "Berlingske tidende, 2021.03.19",
      control: "text",
    },
    hearts: {
      defaultValue: 5,
    },
    headline: {
      defaultValue: "Anmeldelse af: Efterskælv",
      control: "text",
    },
    body: {
      defaultValue:
        "Den anerkendte forfatter tager udgangspunkt i sit ægteskabs nøgne efterskælv. Veloplagt, men rystet, byder hun indenfor - også i de mørkeste kamre. Der har aldrig før været en skilsmisse i denne klan....",
      control: "text",
    },
    linkText: {
      defaultValue: "Berlingske tidende, 2021.03.19",
      control: "text",
    },
    linkLink: {
      defaultValue: "/",
      control: "text",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=1030%3A16233",
    },
  },
} as Meta<typeof ReviewsComp>;

const Template: StoryFn<typeof ReviewsComp> = (args) => {
  return <ReviewsComp {...args} />;
};

export const Single = Template.bind({});
Single.args = {};

// Show multiple reviews to showcase different spacing
export const Multiple = Template.bind({});
Multiple.args = {
  numberOfReviews: 2,
  meta: "Berlingske tidende, 2021.03.19",
  hearts: 2,
  headline: "Headline",
  body: "Body text.",
  linkLink: "/",
  linkText: "Berlingske tidende, 2021.03.19",
};
