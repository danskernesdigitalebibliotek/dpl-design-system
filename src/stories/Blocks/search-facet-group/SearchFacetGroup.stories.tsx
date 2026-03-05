import { StoryFn, Meta } from "@storybook/react-webpack5";
import SearchFacetGroup from "./SearchFacetGroup";

export default {
  title: "Blocks / Advanced Search v2 / Filter Group",
  component: SearchFacetGroup,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof SearchFacetGroup>;

const Template: StoryFn<typeof SearchFacetGroup> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ maxWidth: 500, margin: "auto", padding: "2rem" }}>
    <ul>
      <SearchFacetGroup open={open} />
    </ul>
  </div>
);

export const Closed = Template.bind({});
Closed.args = {
  open: false,
};

export const Open = Template.bind({});
Open.args = {
  open: true,
};
