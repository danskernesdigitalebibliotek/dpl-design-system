import { StoryFn, Meta } from "@storybook/react-webpack5";
import AdvancedSearchRadiobuttonGroup from "./AdvancedSearchRadiobuttonGroup";

export default {
  title: "Blocks / Advanced Search v2 / Radiobutton Group",
  component: AdvancedSearchRadiobuttonGroup,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AdvancedSearchRadiobuttonGroup>;

const Template: StoryFn<typeof AdvancedSearchRadiobuttonGroup> = () => (
  <div style={{ margin: "auto" }}>
    <AdvancedSearchRadiobuttonGroup />
  </div>
);

export const Default = Template.bind({});
