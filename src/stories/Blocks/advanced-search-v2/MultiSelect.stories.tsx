import { StoryFn, Meta } from "@storybook/react-webpack5";
import MultiSelect from "./MultiSelect";

export default {
  title: "Blocks / Advanced Search v2 / MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof MultiSelect>;

const Template: StoryFn<typeof MultiSelect> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ maxWidth: 500, margin: "auto" }}>
    <MultiSelect open={open} />
  </div>
);

export const NotOpen = Template.bind({});
export const Open = Template.bind({});
Open.args = { open: true };
