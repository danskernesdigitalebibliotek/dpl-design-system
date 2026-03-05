import { StoryFn, Meta } from "@storybook/react-webpack5";
import AgeRangeSelect from "./AgeRangeSelect";

export default {
  title: "Blocks / Advanced Search v2 / Age Select",
  component: AgeRangeSelect,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AgeRangeSelect>;

const Template: StoryFn<typeof AgeRangeSelect> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ margin: "auto" }}>
    <AgeRangeSelect open={open} />
  </div>
);

export const NotOpen = Template.bind({});

export const Open = Template.bind({});
Open.args = { open: true };
