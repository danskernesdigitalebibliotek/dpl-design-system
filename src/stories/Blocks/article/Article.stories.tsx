import { StoryFn, Meta } from "@storybook/react";

import Article from "./Article";

export default {
  title: "Blocks / Article page",
  component: Article,

  argTypes: {
    title: {
      defaultValue: "Jesper Stein vinder Læsernes Bogpris for Rampen’",
    },
    subtitle: {
      defaultValue:
        "Jesper Stein har begået en hudløst ærlig og tankevækkende skildring af en skilsmisseramt familie. En selvbiografisk roman, som har ramt læserne  i hjertet.",
    },
    category: {
      defaultValue: "Netmedier",
    },
    author: {
      defaultValue: "Lene Kuhlmann Frandsen",
    },
    date: {
      defaultValue: "08. April 21",
    },
    tags: {
      defaultValue: [
        "dans",
        "contemporary",
        "modern",
        "scenekunst",
        "digt",
        "3-8 årige",
      ],
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477%3A39048&mode=dev",
    },
  },
} as Meta<typeof Article>;

const Template: StoryFn<typeof Article> = (args) => <Article {...args} />;

export const Default = Template.bind({});
