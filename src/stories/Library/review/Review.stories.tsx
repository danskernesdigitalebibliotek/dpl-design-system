import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Review as ReviewsComp } from "./Review";

export default {
  title: "Library / Review",
  component: ReviewsComp,
  decorators: [withDesign],
  argTypes: {
    numberOfReviews: {
      defaultValue: 1,
    },
    metaHeadline: {
      defaultValue: "Berlingske tidende, 2021.03.19",
      control: "text",
    },
    hearts: {
      defaultValue: 5,
    },
    headlineText: {
      defaultValue: "Anmeldelse af: Efterskælv",
      control: "text",
    },
    bodyText: {
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
} as ComponentMeta<typeof ReviewsComp>;

const Template: ComponentStory<typeof ReviewsComp> = (args) => {
  return <ReviewsComp {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
