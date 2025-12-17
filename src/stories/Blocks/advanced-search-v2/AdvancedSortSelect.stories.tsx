import { StoryFn, Meta } from "@storybook/react-webpack5";
import AdvancedSortSelect from "./AdvancedSortSelect";

export default {
  title: "Blocks / Advanced Search v2 / Sort Select",
  component: AdvancedSortSelect,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AdvancedSortSelect>;

const Template: StoryFn<typeof AdvancedSortSelect> = () => (
  <AdvancedSortSelect />
);

export const Default = Template.bind({});
