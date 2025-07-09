import { StoryFn, Meta } from "@storybook/react-webpack5";

import Article from "./Article";

export default {
  title: "Blocks / Article page",
  component: Article,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    category: { control: "text" },
    author: { control: "text" },
    date: { control: "text" },
    tags: { control: "object" },
  },
  args: {
    title: "Jesper Stein vinder Læsernes Bogpris for Rampen'",
    subtitle:
      "Jesper Stein har begået en hudløst ærlig og tankevækkende skildring af en skilsmisseramt familie. En selvbiografisk roman, som har ramt læserne  i hjertet.",
    category: "Netmedier",
    author: "Lene Kuhlmann Frandsen",
    date: "08. April 21",
    tags: ["dans", "contemporary", "modern", "scenekunst", "digt", "3-8 årige"],
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
