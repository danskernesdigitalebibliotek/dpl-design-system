import { Meta, StoryFn } from "@storybook/react";
import Recommender from "./Recommenders";

export default {
  title: "Library / Recommender",
  component: Recommender,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Because you have borrowed something you may also like",
    },
    bright: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    padding: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    titleLeft: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    triple: {
      control: { type: "boolean" },
      defaultValue: true,
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
} as Meta<typeof Recommender>;

const RecommenderMC: StoryFn<typeof Recommender> = (args) => (
  <Recommender {...args} />
);

const SomethingSimilarMC: StoryFn<typeof Recommender> = (args) => (
  <Recommender {...args} />
);

export const Recommend = RecommenderMC.bind({});
export const SomethingSimilar = SomethingSimilarMC.bind({});
Recommend.args = {};
SomethingSimilar.args = {
  padding: false,
  titleLeft: true,
  title: "Something similar",
  triple: false,
};
