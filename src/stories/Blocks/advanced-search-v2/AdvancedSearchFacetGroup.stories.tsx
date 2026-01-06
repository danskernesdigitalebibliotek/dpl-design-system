import { StoryFn, Meta } from "@storybook/react-webpack5";
import AdvancedSearchFacetGroup from "./AdvancedSearchFacetGroup";

export default {
  title: "Blocks / Advanced Search v2 / Filter Group",
  component: AdvancedSearchFacetGroup,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AdvancedSearchFacetGroup>;

const Template: StoryFn<typeof AdvancedSearchFacetGroup> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ maxWidth: 500, margin: "auto", padding: "2rem" }}>
    <ul>
      <AdvancedSearchFacetGroup open={open} />
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
