import { StoryFn, Meta } from "@storybook/react-webpack5";
import SearchForm from "./SearchForm";

export default {
  title: "Blocks / Advanced Search v2 / Form",
  component: SearchForm,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof SearchForm>;

const Template: StoryFn<typeof SearchForm> = () => (
  <div style={{ maxWidth: 1000, margin: "auto" }}>
    <SearchForm />
  </div>
);

export const Default = Template.bind({});
