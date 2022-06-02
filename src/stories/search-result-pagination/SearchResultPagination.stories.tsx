import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultPagination } from "./SearchResultPagination";

export default {
  title: "Components / Search Result - Pagination",
  component: SearchResultPagination,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=1011%3A15112",
    },
  },
  argTypes: {
    currentResults: {
      control: { type: "text" },
      defaultValue: "10",
    },
    totalResults: {
      control: { type: "text" },
      defaultValue: "423",
    },
  },
} as ComponentMeta<typeof SearchResultPagination>;

const Template: ComponentStory<typeof SearchResultPagination> = (args) => {
  return <SearchResultPagination {...args} />;
};

export const Item = Template.bind({});
Item.args = {};
