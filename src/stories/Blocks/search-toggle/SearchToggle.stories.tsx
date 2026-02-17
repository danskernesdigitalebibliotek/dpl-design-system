import { StoryFn, Meta } from "@storybook/react-webpack5";
import SearchToggle from "./SearchToggle";

export default {
  title: "Blocks / Advanced Search v2 / Toggle",
  component: SearchToggle,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof SearchToggle>;

const Template: StoryFn<typeof SearchToggle> = ({
  checked,
}: {
  checked?: boolean;
}) => (
  <div style={{ maxWidth: 500, margin: "auto", padding: "2rem" }}>
    <SearchToggle checked={checked} />
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
