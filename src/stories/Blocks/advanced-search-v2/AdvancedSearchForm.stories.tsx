import { StoryFn, Meta } from "@storybook/react-webpack5";
import AdvancedSearchForm from "./AdvancedSearchForm";

export default {
  title: "Blocks / Advanced Search v2 / Form",
  component: AdvancedSearchForm,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof AdvancedSearchForm>;

const Template: StoryFn<typeof AdvancedSearchForm> = () => (
  <div style={{ maxWidth: 1000, margin: "auto" }}>
    <AdvancedSearchForm />
  </div>
);

export const Default = Template.bind({});
