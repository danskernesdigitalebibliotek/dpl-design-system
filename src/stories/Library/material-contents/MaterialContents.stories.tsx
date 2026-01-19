import { Meta, StoryFn } from "@storybook/react-webpack5";
import MaterialContents from "./MaterialContents";
import { complexData, rawData } from "./materialContentsData";

export default {
  title: "Library / Material Content",
  component: MaterialContents,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
} as Meta<typeof MaterialContents>;

const Template: StoryFn<typeof MaterialContents> = (args) => (
  <MaterialContents {...args} />
);

export const Complex = Template.bind({});
Complex.args = {
  contents: complexData,
};

export const WithRawContent = Template.bind({});
WithRawContent.args = {
  contents: rawData,
};
