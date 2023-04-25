import { ComponentMeta, ComponentStory } from "@storybook/react";
import FavoritesListMaterialComponent from "./favorites-list-material-component";

export default {
  title: "Library / Favorites list material-component",
  component: FavoritesListMaterialComponent,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Din favoritliste",
    },
    bright: {
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
          filled: true,
        },
        {
          title: "Ella Fitzgerald",
          authors: "Af Isabel Sánchez Vegara",
          filled: true,
        },
      ],
    },
  },
} as ComponentMeta<typeof FavoritesListMaterialComponent>;

const Template: ComponentStory<typeof FavoritesListMaterialComponent> = (
  args
) => <FavoritesListMaterialComponent {...args} />;

export const FavoritesList = Template.bind({});
FavoritesList.args = {};
