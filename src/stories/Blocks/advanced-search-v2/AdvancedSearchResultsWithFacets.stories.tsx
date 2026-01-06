import { StoryFn, Meta } from "@storybook/react-webpack5";
import AdvancedSearchResultsWithFacets from "./AdvancedSearchResultsWithFacets";

export default {
  title: "Blocks / Advanced Search v2 / Results with Facets",
  component: AdvancedSearchResultsWithFacets,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AdvancedSearchResultsWithFacets>;

const Template: StoryFn<typeof AdvancedSearchResultsWithFacets> = () => (
  <div style={{ maxWidth: 1000, margin: "auto" }}>
    <AdvancedSearchResultsWithFacets />
  </div>
);

export const Default = Template.bind({});
