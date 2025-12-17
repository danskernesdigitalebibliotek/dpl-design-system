import { StoryFn, Meta } from "@storybook/react-webpack5";
import AdvancedSearchToggle from "./AdvancedSearchToggle";

export default {
  title: "Blocks / Advanced Search v2 / Toggle",
  component: AdvancedSearchToggle,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AdvancedSearchToggle>;

const Template: StoryFn<typeof AdvancedSearchToggle> = ({
  checked,
}: {
  checked?: boolean;
}) => (
  <div style={{ maxWidth: 500, margin: "auto", padding: "2rem" }}>
    <AdvancedSearchToggle checked={checked} />
  </div>
);

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
