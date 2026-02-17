import { StoryFn, Meta } from "@storybook/react-webpack5";
import SearchSortSelect from "./SearchSortSelect";

export default {
  title: "Blocks / Advanced Search v2 / Sort Select",
  component: SearchSortSelect,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof SearchSortSelect>;

const Template: StoryFn<typeof SearchSortSelect> = () => <SearchSortSelect />;

export const Default = Template.bind({});
