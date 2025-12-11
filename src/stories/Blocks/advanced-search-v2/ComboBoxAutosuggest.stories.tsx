import { StoryFn, Meta } from "@storybook/react-webpack5";
import ComboBoxAutosuggest from "./ComboBoxAutosuggest";

export default {
  title: "Blocks / Advanced Search v2 / ComboBox Autosuggest",
  component: ComboBoxAutosuggest,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof ComboBoxAutosuggest>;

const Template: StoryFn<typeof ComboBoxAutosuggest> = ({
  open,
}: {
  open?: boolean;
}) => (
  <div style={{ maxWidth: 500, margin: "auto" }}>
    <ComboBoxAutosuggest open={open} />
  </div>
);

export const NotOpen = Template.bind({});
NotOpen.args = { open: false };

export const Open = Template.bind({});
Open.args = { open: true };
