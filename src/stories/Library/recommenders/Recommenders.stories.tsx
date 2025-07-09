import { Meta, StoryFn } from "@storybook/react-webpack5";
import Recommender from "./Recommenders";

export default {
  title: "Library / Recommender",
  component: Recommender,
  argTypes: {
    title: { control: "text" },
    bright: { control: { type: "boolean" } },
    padding: { control: { type: "boolean" } },
    titleLeft: { control: { type: "boolean" } },
    triple: { control: { type: "boolean" } },
    recommenderData: { control: "object" },
  },
  args: {
    title: "Because you have borrowed something you may also like",
    bright: true,
    padding: true,
    titleLeft: false,
    triple: true,
    recommenderData: [
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
