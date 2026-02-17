import { StoryFn, Meta } from "@storybook/react-webpack5";
import Search from "./SearchResult";

export default {
  title: "Blocks / Search / Search Results with Facets",
  component: Search,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Search>;

const Template: StoryFn<typeof Search> = () => (
  <div style={{ maxWidth: 1000, margin: "auto" }}>
    <Search />
  </div>
);

export const Default = Template.bind({});
