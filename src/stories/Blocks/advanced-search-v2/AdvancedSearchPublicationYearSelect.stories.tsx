import { StoryFn, Meta } from "@storybook/react-webpack5";
import AdvancedSearchPublicationYearSelect from "./AdvancedSearchPublicationYearSelect";

export default {
  title: "Blocks / Advanced Search v2 / Publication Year Select",
  component: AdvancedSearchPublicationYearSelect,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AdvancedSearchPublicationYearSelect>;

const Template: StoryFn<typeof AdvancedSearchPublicationYearSelect> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ margin: "auto" }}>
    <AdvancedSearchPublicationYearSelect open={open} />
  </div>
);

export const NotOpen = Template.bind({});

export const Open = Template.bind({});
Open.args = { open: true };
