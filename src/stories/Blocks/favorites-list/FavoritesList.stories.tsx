import { ComponentMeta, ComponentStory } from "@storybook/react";
import FavouritesList from "./FavoritesList";

export default {
  title: "Blocks / Favourite List",
  component: FavouritesList,
} as ComponentMeta<typeof FavouritesList>;

const Template: ComponentStory<typeof FavouritesList> = (args) => {
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
