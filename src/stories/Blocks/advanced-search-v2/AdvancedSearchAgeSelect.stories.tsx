import { StoryFn, Meta } from "@storybook/react-webpack5";
import AdvancedSearchAgeSelect from "./AdvancedSearchAgeSelect";

export default {
  title: "Blocks / Advanced Search v2 / Age Select",
  component: AdvancedSearchAgeSelect,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AdvancedSearchAgeSelect>;

const Template: StoryFn<typeof AdvancedSearchAgeSelect> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ maxWidth: 500, margin: "auto" }}>
    <AdvancedSearchAgeSelect open={open} />
  </div>
);

export const NotOpen = Template.bind({});

export const Open = Template.bind({});
Open.args = { open: true };
