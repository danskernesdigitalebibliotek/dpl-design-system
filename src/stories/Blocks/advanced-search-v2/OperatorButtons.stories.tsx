import { StoryFn, Meta } from "@storybook/react-webpack5";
import OperatorButtons from "./OperatorButtons";

export default {
  title: "Blocks / Advanced Search v2 / Operator buttons",
  component: OperatorButtons,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof OperatorButtons>;

const Template: StoryFn<typeof OperatorButtons> = () => <OperatorButtons />;

export const Default = Template.bind({});
