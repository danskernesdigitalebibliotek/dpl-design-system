import { StoryFn, Meta } from "@storybook/react-webpack5";
import AdvancedSearchFilterGroup from "./AdvancedSearchFilterGroup";

export default {
  title: "Blocks / Advanced Search v2 / Filter Group",
  component: AdvancedSearchFilterGroup,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AdvancedSearchFilterGroup>;

const Template: StoryFn<typeof AdvancedSearchFilterGroup> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ maxWidth: 500, margin: "auto", padding: "2rem" }}>
    <ul>
      <AdvancedSearchFilterGroup open={open} />
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
