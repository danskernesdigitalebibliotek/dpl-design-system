import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Article from "./Article";

export default {
  title: "Blocks / Article page",
  component: Article,
  decorators: [withDesign],
  argTypes: {
    title: {
      defaultValue: "Jesper Stein vinder Læsernes Bogpris for Rampen’",
    },
    subtitle: {
      defaultValue:
        "Jesper Stein har begået en hudløst ærlig og tankevækkende skildring af en skilsmisseramt familie. En selvbiografisk roman, som har ramt læserne  i hjertet.",
    },
    author: {
      defaultValue: "Lene Kuhlmann Frandsen",
    },
    date: {
      defaultValue: "08. April 21",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477%3A39048&mode=dev",
    },
  },
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

export const Default = Template.bind({});
