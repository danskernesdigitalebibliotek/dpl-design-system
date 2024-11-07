import { StoryFn, Meta } from "@storybook/react";

import { Review as ReviewsComp } from "./Review";

export default {
  title: "Library / Review",
  component: ReviewsComp,
  argTypes: {
    numberOfReviews: { control: { type: "number" } },
    meta: { control: "text" },
    hearts: { control: { type: "number" } },
    headline: { control: "text" },
    body: { control: "text" },
    linkText: { control: "text" },
    linkLink: { control: "text" },
  },
  args: {
    numberOfReviews: 1,
    meta: "Berlingske tidende, 2021.03.19",
    hearts: 5,
    headline: "Anmeldelse af: Efterskælv",
    body: "Den anerkendte forfatter tager udgangspunkt i sit ægteskabs nøgne efterskælv. Veloplagt, men rystet, byder hun indenfor - også i de mørkeste kamre. Der har aldrig før været en skilsmisse i denne klan....",
    linkText: "Berlingske tidende, 2021.03.19",
    linkLink: "/",
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
