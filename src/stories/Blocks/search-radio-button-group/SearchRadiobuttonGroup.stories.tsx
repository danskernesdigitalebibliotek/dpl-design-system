import { StoryFn, Meta } from "@storybook/react-webpack5";
import SearchRadiobuttonGroup from "./SearchRadiobuttonGroup";

export default {
  title: "Blocks / Advanced Search v2 / Radiobutton Group",
  component: SearchRadiobuttonGroup,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof SearchRadiobuttonGroup>;

const Template: StoryFn<typeof SearchRadiobuttonGroup> = () => (
  <div style={{ margin: "auto" }}>
    <SearchRadiobuttonGroup />
  </div>
);

export const Default = Template.bind({});
