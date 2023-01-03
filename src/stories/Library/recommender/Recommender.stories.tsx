import { ComponentMeta, ComponentStory } from "@storybook/react";
import Recommender from "./Recommender";

export default {
  title: "Library / Recommender",
  component: Recommender,
  argTypes: {
    title: {
      control: "text",
      defaultValue:
        "Kunne du lide “Audrey Hepburn” og mangler du noget at læse?",
    },
    recommenderData: {
      control: "object",
      defaultValue: [
        {
          title: "Ella Fitzgerald",
          authors: "Af Isabel Sánchez Vegara",
          filled: true,
        },
        {
          title: "Ella Fitzgerald",
          authors: "Af Isabel Sánchez Vegara",
          filled: true,
        },
        {
          title: "Ella Fitzgerald",
          authors: "Af Isabel Sánchez Vegara",
          filled: false,
        },
        {
          title: "Ella Fitzgerald",
          authors: "Af Isabel Sánchez Vegara",
          filled: false,
        },
      ],
    },
  },
} as ComponentMeta<typeof Recommender>;

const Template: ComponentStory<typeof Recommender> = (args) => (
  <Recommender {...args} />
);

export const Recommend = Template.bind({});
Recommend.args = {};
