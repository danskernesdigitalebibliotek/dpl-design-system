import { StoryFn, Meta } from "@storybook/react-webpack5";
import SearchTermSelect from "./SearchTermSelect";

export default {
  title: "Blocks / Advanced Search v2 / SearchTermSelect",
  component: SearchTermSelect,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof SearchTermSelect>;

const Template: StoryFn<typeof SearchTermSelect> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ maxWidth: 370, margin: "auto" }}>
    <SearchTermSelect open={open} />
  </div>
);

export const Open = Template.bind({});
Open.args = { open: true };
export const NotOpen = Template.bind({});
