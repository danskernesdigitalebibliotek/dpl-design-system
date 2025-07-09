import { Meta, StoryFn } from "@storybook/react-webpack5";
import FavouritesList from "./FavoritesList";

export default {
  title: "Blocks / Favourite List",
  component: FavouritesList,
} as Meta<typeof FavouritesList>;

const Template: StoryFn<typeof FavouritesList> = (args) => {
  return <FavouritesList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  materialsCount: 3,
};

export const SkeletonVersion = Template.bind({});
SkeletonVersion.args = {
  materialsCount: 3,
  skeletonVersion: true,
};
