import { StoryFn, Meta } from "@storybook/react-webpack5";
import PublicationYearRangeSelect from "./PublicationYearRangeSelect";

export default {
  title: "Blocks / Advanced Search v2 / Publication Year Select",
  component: PublicationYearRangeSelect,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof PublicationYearRangeSelect>;

const Template: StoryFn<typeof PublicationYearRangeSelect> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ margin: "auto" }}>
    <PublicationYearRangeSelect open={open} />
  </div>
);

export const NotOpen = Template.bind({});

export const Open = Template.bind({});
Open.args = { open: true };
